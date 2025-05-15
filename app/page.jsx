"use client";

import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
export default function Home() {
  return (
    <div className="text-center">

      {/* voiture */}
      {/* <div className="flex justify-center mb-6 p-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 h-24 text-teal-400"
          viewBox="0 0 640 512"
          fill="currentColor"
        >
          <path d="M544 192h-16L466.5 56.4c-5.9-11.7-17.9-18.4-30.9-18.4H204.4c-13 0-25 6.8-30.9 18.4L112 192H96c-53 0-96 43-96 96v32c0 17.7 14.3 32 32 32h32c0 35.3 28.7 64 64 64s64-28.7 64-64h192c0 35.3 28.7 64 64 64s64-28.7 64-64h32c17.7 0 32-14.3 32-32v-32c0-53-43-96-96-96zM204.4 64h231.3l48 96H156.4l48-96zM128 384a32 32 0 1 1 0-64 32 32 0 0 1 0 64zm320 0a32 32 0 1 1 0-64 32 32 0 0 1 0 64z"/>
        </svg>
      </div> */}

       {/* Modelo 3D */}
       <div className="flex justify-center p-14">
        <Canvas style={{ height: "400px", width: "100%" }}>
          <ambientLight intensity={5} />
          <directionalLight position={[10, 10, 5]} />
              <mesh>
                <Car />
              </mesh>
          <OrbitControls />
        </Canvas>
      </div>

      <h1 className="text-4xl font-bold p-4">
        Bienvenue chez AutoQuébec!
      </h1>
      <p className="text-xl p-4 mb-2">
        Découvrez notre vaste inventaire de voitures neuves et usagées à des prix imbattables.
      </p>
      <p className="text-xl mb-6">
        Que vous cherchiez un véhicule économique, un VUS familial ou une voiture de luxe, nous avons ce qu’il vous faut.
      </p>
      <button className="shadow-2xl border border-white/20 rounded text-amber-300 font-semibold p-6 hover:bg-slate-900 hover:text-amber-300 transition duration-300">
        Parcourez nos véhicules
      </button>
      <br /><br />

      {/* Rutas a endpoints */}
      <section className="text-center py-12 bg-white">
        <h2 className="text-3xl font-semibold mb-12">Trouver ton Auto.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
          {/* Opción 1 */}
          <div className="flex flex-col items-center">
            <img src="/icon1.PNG" alt="Disponibilidad inmediata BMW" className="w-16 h-16 mb-4" />
            <p className="text-lg mb-4">Disponibilité inmediate.</p>
            <button className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
              Chercher maintenant
            </button>
          </div>

          {/* Opción 2 */}
          <div className="flex flex-col items-center">
            <img src="/icon2.png" alt="Agenda una prueba de manejo" className="w-16 h-16 mb-4" />
            <p className="text-lg mb-4">Planifier une rendez-vous pour tester.</p>
            <button className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
              Planifier
            </button>
          </div>

          {/* Opción 3 */}
          <div className="flex flex-col items-center">
            <img src="/icon3.png" alt="Agenda una cita de servicio" className="w-16 h-16 mb-4" />
            <p className="text-lg mb-4">Planifier une rendez-vous de service.</p>
            <button className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition">
              Planifier
            </button>
          </div>
        </div>
      </section>

    </div>

  );
}

function Car() {
  const { scene } = useGLTF('/models/car.glb');
  const carRef = useRef();

  // Rotate the car on every frame
  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y += 0.01; // Adjust rotation speed as needed
    }
  });

  return (
    <primitive
      ref={carRef}
      object={scene}
      scale={0.01}
      position={[0, -1, 0]}
    />
  );
}