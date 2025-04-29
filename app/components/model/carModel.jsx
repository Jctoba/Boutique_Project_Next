// components/CarModel.jsx
'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Car() {
  const { scene } = useGLTF('/models/car.glb');
  return <primitive object={scene} scale={0.5} />;
}

export default function CarModel() {
  return (
    <div style={{ height: '500px' }}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Car />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
