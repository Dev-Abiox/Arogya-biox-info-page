import React, { useEffect, useRef, memo } from 'react';
import * as THREE from 'three';

const PARTICLE_COUNT = 150;
const RBC_RATIO = 0.95;
const SPHERE_RADIUS = 1.5;

// Mobile-only palette: #F04A4A, #E3262A, #D91F26, #B31217 | WBC: #F2F2F2, #D9D9D9
const RBC_PALETTES = [
  { highlight: [240, 74, 74], mid: [227, 38, 42], edge: [179, 18, 23] },   // #F04A4A → #E3262A → #B31217
  { highlight: [235, 60, 60], mid: [217, 31, 38], edge: [170, 14, 18] },   // warm variant → #D91F26
  { highlight: [245, 82, 82], mid: [230, 42, 46], edge: [185, 22, 28] },   // brighter highlight
  { highlight: [238, 68, 68], mid: [222, 35, 40], edge: [175, 16, 20] },   // balanced variant
] as const;

function createCellTexture(isWBC: boolean, variant: number = 0): THREE.CanvasTexture {
  const size = 64;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const center = size / 2;
  const radius = size * 0.45;

  if (!isWBC) {
    const pal = RBC_PALETTES[variant % RBC_PALETTES.length];
    const grad = ctx.createRadialGradient(
      center - radius * 0.2, center - radius * 0.2, 0,
      center, center, radius
    );
    grad.addColorStop(0, `rgb(${pal.highlight[0]}, ${pal.highlight[1]}, ${pal.highlight[2]})`);
    grad.addColorStop(0.6, `rgb(${pal.mid[0]}, ${pal.mid[1]}, ${pal.mid[2]})`);
    grad.addColorStop(1, `rgb(${pal.edge[0]}, ${pal.edge[1]}, ${pal.edge[2]})`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.fill();

    // Biconcave center — lighter to keep mobile reds vivid
    const centerGrad = ctx.createRadialGradient(center, center, 0, center, center, radius * 0.6);
    centerGrad.addColorStop(0, 'rgba(0,0,0,0.38)');
    centerGrad.addColorStop(0.5, 'rgba(0,0,0,0.12)');
    centerGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = centerGrad;
    ctx.beginPath();
    ctx.arc(center, center, radius * 0.65, 0, Math.PI * 2);
    ctx.fill();
  } else {
    const grad = ctx.createRadialGradient(
      center - radius * 0.3, center - radius * 0.3, 0,
      center, center, radius
    );
    grad.addColorStop(0, 'rgb(242, 242, 242)');       // #F2F2F2
    grad.addColorStop(0.7, 'rgb(217, 217, 217)');     // #D9D9D9
    grad.addColorStop(1, 'rgb(180, 180, 185)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.fill();

    const centerGrad = ctx.createRadialGradient(center, center, 0, center, center, radius * 0.65);
    centerGrad.addColorStop(0, 'rgba(130,130,140,0.25)');
    centerGrad.addColorStop(0.6, 'rgba(170,170,180,0.08)');
    centerGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = centerGrad;
    ctx.beginPath();
    ctx.arc(center, center, radius * 0.65, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

const MobileParticleThree: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup — auto-scale camera so sphere fills ~70% of container
    const scene = new THREE.Scene();
    const fovDeg = 45;
    const halfFovRad = (fovDeg / 2) * (Math.PI / 180);
    const sphereDiameter = SPHERE_RADIUS * 2;
    const desiredVisibleHeight = sphereDiameter / 0.7;
    const cameraZ = (desiredVisibleHeight / 2) / Math.tan(halfFovRad);
    const camera = new THREE.PerspectiveCamera(fovDeg, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = cameraZ;

    const renderer = new THREE.WebGLRenderer({
      antialias: false,
      alpha: true,
      powerPreference: 'low-power',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // Textures & materials
    const rbcTextures = RBC_PALETTES.map((_, idx) => createCellTexture(false, idx));
    const wbcTexture = createCellTexture(true);

    const particleGroup = new THREE.Group();
    scene.add(particleGroup);
    renderer.sortObjects = true;

    const rbcMaterials = rbcTextures.map(tex => new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    }));

    const wbcMaterial = new THREE.SpriteMaterial({
      map: wbcTexture,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    // Fibonacci sphere distribution — matches desktop algorithm
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isWBC = Math.random() > RBC_RATIO;
      const baseMat = isWBC ? wbcMaterial : rbcMaterials[i % rbcMaterials.length];
      const material = baseMat.clone();
      const sprite = new THREE.Sprite(material);

      const phi = Math.acos(-1 + (2 * i) / PARTICLE_COUNT);
      const theta = Math.sqrt(PARTICLE_COUNT * Math.PI) * phi;
      const r = (0.85 + Math.random() * 0.15) * SPHERE_RADIUS;

      sprite.position.set(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      );

      const baseSize = isWBC ? 0.32 + Math.random() * 0.12 : 0.24 + Math.random() * 0.12;
      sprite.scale.set(baseSize, baseSize, 1);

      particleGroup.add(sprite);
    }

    // Animation loop
    let animId: number;
    let isVisible = true;
    const timer = new THREE.Timer();
    const _worldPos = new THREE.Vector3();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      timer.update();
      const elapsed = timer.getElapsed();

      // Slow rotation matching desktop
      particleGroup.rotation.y = elapsed * 0.04;
      particleGroup.rotation.x = elapsed * 0.015;

      // Heartbeat pulse
      const pulse = 1 + Math.pow(Math.sin(elapsed * 0.72), 4) * 0.015;
      particleGroup.scale.setScalar(pulse);

      // Depth-based opacity
      const children = particleGroup.children;
      for (let i = 0; i < children.length; i++) {
        const sprite = children[i] as THREE.Sprite;
        _worldPos.copy(sprite.position);
        particleGroup.localToWorld(_worldPos);
        _worldPos.project(camera);
        const depthOpacity = THREE.MathUtils.clamp(0.3 + (1 - _worldPos.z) * 0.5, 0.15, 1.0);
        (sprite.material as THREE.SpriteMaterial).opacity = depthOpacity;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Pause when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(container);

    // Resize
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    cleanupRef.current = () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      rbcTextures.forEach(tex => tex.dispose());
      wbcTexture.dispose();
      rbcMaterials.forEach(mat => mat.dispose());
      wbcMaterial.dispose();
      particleGroup.children.forEach(child => {
        if (child instanceof THREE.Sprite) {
          child.material.dispose();
        }
      });
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };

    return () => {
      cleanupRef.current?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
    />
  );
};

export default memo(MobileParticleThree);
