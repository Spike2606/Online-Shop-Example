import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function WireTorus({
  position,
  scale = 1,
  speed = 0.15,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * (speed * 1.3);
  });

  return (
    <Float floatIntensity={0.9} rotationIntensity={0.35} speed={1.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.22, 20, 48]} />
        <meshBasicMaterial color="#60a5fa" opacity={0.38} transparent wireframe />
      </mesh>
    </Float>
  );
}

function FloatingOrb({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
  });

  return (
    <Float floatIntensity={1.1} rotationIntensity={0.5} speed={1.8}>
      <mesh ref={ref} position={position}>
        <icosahedronGeometry args={[0.75, 1]} />
        <MeshDistortMaterial
          color={color}
          distort={0.28}
          metalness={0.6}
          roughness={0.15}
          speed={1.5}
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
}

function OrbitRing({
  position,
  rotation,
  radius = 1.4,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  radius?: number;
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.12;
  });

  return (
    <mesh ref={ref} position={position} rotation={rotation}>
      <torusGeometry args={[radius, 0.018, 8, 80]} />
      <meshBasicMaterial color="#93c5fd" opacity={0.45} transparent />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight color="#60a5fa" intensity={1.1} position={[8, 6, 6]} />
      <pointLight color="#2563eb" intensity={0.5} position={[-8, -4, 4]} />
      <WireTorus position={[-3.2, 1.8, -1.5]} scale={0.85} />
      <WireTorus position={[3.8, -0.8, -2]} scale={0.55} speed={0.22} />
      <FloatingOrb color="#3b82f6" position={[2.4, 2.2, -2.5]} />
      <FloatingOrb color="#1d4ed8" position={[-2.2, -1.6, -1.8]} />
      <OrbitRing position={[0.5, 0.2, -3.5]} rotation={[Math.PI / 3.2, 0.4, 0]} />
      <OrbitRing position={[-1, 1.5, -4]} radius={1.8} rotation={[0.2, Math.PI / 5, Math.PI / 4]} />
    </>
  );
}

export function HeroScene() {
  return (
    <div aria-hidden="true" className="hero-scene">
      <Canvas
        camera={{ fov: 42, position: [0, 0, 9] }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
