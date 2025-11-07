import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, geometry }) {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    meshRef.current.rotation.y = Math.cos(time * 0.2) * 0.2;
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <mesh ref={meshRef} castShadow>
        {geometry}
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      
      <FloatingShape
        position={[-3, 2, 0]}
        color="#00d4ff"
        geometry={<boxGeometry args={[1, 1, 1]} />}
      />
      <FloatingShape
        position={[3, -2, 0]}
        color="#00ffcc"
        geometry={<octahedronGeometry args={[0.8]} />}
      />
      <FloatingShape
        position={[0, 0, -2]}
        color="#00d4ff"
        geometry={<torusGeometry args={[0.6, 0.2, 16, 32]} />}
      />
      <FloatingShape
        position={[-2, -1, 1]}
        color="#00ffcc"
        geometry={<dodecahedronGeometry args={[0.7]} />}
      />
    </>
  );
}

const Hero3D = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;
