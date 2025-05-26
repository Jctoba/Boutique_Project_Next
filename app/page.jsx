"use client";

import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden  bg-gradient-to-br from-slate-900 via-black to-slate-800">
      
      <div className="relative z-10 text-center">
         {/* Modelo 3D  */}
         <div className="relative flex justify-center pt-14">
         
          <Canvas style={{ height: "400px", width: "100%" }} className="relative z-10">
            <ambientLight intensity={5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <pointLight position={[0, 5, 10]} intensity={1.5} color="#ffe066" />
            <mesh>
              <Car />
            </mesh>
            <OrbitControls />
          </Canvas> 
        </div>

        <h1 className="text-5xl font-extrabold p-4 text-amber-400 drop-shadow-lg">
          Bienvenue chez AutoQuébec!
        </h1>
        <p className="text-xl p-4 mb-2 text-slate-200">
          Découvrez notre vaste inventaire de voitures neuves et usagées à des prix imbattables.
        </p>
        <p className="text-xl mb-6 text-slate-300">
          Que vous cherchiez un véhicule économique, un VUS familial ou une voiture de luxe, nous avons ce qu’il vous faut.
        </p>
        <a href="/voitures" className="inline-block shadow-2xl bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-900 font-bold px-8 py-4 rounded-full text-lg hover:scale-105 hover:from-yellow-400 hover:to-amber-500 transition-all duration-300">
          Parcourez nos véhicules
        </a>
        <br /><br />

        <section className="text-center py-16 bg-gradient-to-b from-white to-slate-100 rounded-t-3xl mt-12 shadow-inner">
          <h2 className="text-4xl font-bold mb-12 text-slate-800">Trouver ton Auto.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-4">
            {/* Opción 1 */}
            <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8L5.72187 10.2682C5.90158 10.418 6.12811 10.5 6.36205 10.5H17.6379C17.8719 10.5 18.0984 10.418 18.2781 10.2682L21 8M6.5 14H6.51M17.5 14H17.51M8.16065 4.5H15.8394C16.5571 4.5 17.2198 4.88457 17.5758 5.50772L20.473 10.5777C20.8183 11.1821 21 11.8661 21 12.5623V18.5C21 19.0523 20.5523 19.5 20 19.5H19C18.4477 19.5 18 19.0523 18 18.5V17.5H6V18.5C6 19.0523 5.55228 19.5 5 19.5H4C3.44772 19.5 3 19.0523 3 18.5V12.5623C3 11.8661 3.18166 11.1821 3.52703 10.5777L6.42416 5.50772C6.78024 4.88457 7.44293 4.5 8.16065 4.5ZM7 14C7 14.2761 6.77614 14.5 6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5C6.77614 13.5 7 13.7239 7 14ZM18 14C18 14.2761 17.7761 14.5 17.5 14.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5C17.7761 13.5 18 13.7239 18 14Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className="text-lg mb-4 text-slate-700 font-medium">Disponibilité immédiate toujours pour tous.</p>
              <a href="/voitures" className="border border-amber-400 text-amber-500 px-6 py-2 rounded-full font-semibold hover:bg-amber-400 hover:text-white transition">
                Chercher maintenant
              </a>
            </div>

            {/* Opción 2 */}  
            <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5243 12.0005C18.5243 15.8665 15.4687 19.0005 11.6993 19.0005C11.6993 15.6865 12.6743 11.5005 17.5493 11.0005H18.4551C18.5013 11.3317 18.5244 11.6659 18.5243 12.0005V12.0005Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M5.92587 10.2543C5.51382 10.2121 5.14552 10.5119 5.10326 10.9239C5.061 11.336 5.36078 11.7043 5.77283 11.7465L5.92587 10.2543ZM11.6993 19.0004L11.6993 19.7504C11.8982 19.7505 12.089 19.6714 12.2296 19.5308C12.3703 19.3901 12.4493 19.1994 12.4493 19.0004H11.6993ZM4.88289 12.3342L4.1337 12.3691L4.88289 12.3342ZM11.0491 5.03234L10.9758 4.28594L11.0491 5.03234ZM17.7124 11.1049C17.7702 11.5151 18.1495 11.8008 18.5596 11.7431C18.9698 11.6854 19.2555 11.3061 19.1978 10.8959L17.7124 11.1049ZM5.84935 11.7504C6.26356 11.7504 6.59935 11.4146 6.59935 11.0004C6.59935 10.5862 6.26356 10.2504 5.84935 10.2504V11.7504ZM4.94357 10.2504C4.52936 10.2504 4.19357 10.5862 4.19357 11.0004C4.19357 11.4146 4.52936 11.7504 4.94357 11.7504V10.2504ZM5.84935 10.2504C5.43514 10.2504 5.09935 10.5862 5.09935 11.0004C5.09935 11.4146 5.43514 11.7504 5.84935 11.7504V10.2504ZM17.5493 11.7504C17.9636 11.7504 18.2993 11.4146 18.2993 11.0004C18.2993 10.5862 17.9636 10.2504 17.5493 10.2504V11.7504ZM5.77283 11.7465C7.96327 11.9712 9.21227 12.9978 9.94811 14.3117C10.7101 15.6722 10.9493 17.3973 10.9493 19.0004H12.4493C12.4493 17.2895 12.2011 15.2646 11.2568 13.5787C10.2864 11.846 8.61043 10.5297 5.92587 10.2543L5.77283 11.7465ZM11.6994 18.2504C8.47411 18.2501 5.78794 15.6476 5.63208 12.2994L4.1337 12.3691C4.32526 16.4842 7.63958 19.75 11.6993 19.7504L11.6994 18.2504ZM5.63208 12.2994C5.47617 8.95004 7.91012 6.09445 11.1225 5.77875L10.9758 4.28594C6.93637 4.68292 3.9422 8.25515 4.1337 12.3691L5.63208 12.2994ZM11.1225 5.77875C14.3322 5.46331 17.2458 7.78918 17.7124 11.1049L19.1978 10.8959C18.6237 6.8165 15.0179 3.8887 10.9758 4.28594L11.1225 5.77875ZM5.84935 10.2504H4.94357V11.7504H5.84935V10.2504ZM5.84935 11.7504H17.5493V10.2504H5.84935V11.7504Z" fill="#000000"/>
              </svg>
              <p className="text-lg mb-4 text-slate-700 font-medium">Planifier un rendez-vous pour tester.</p>
              <a href="tel:+52 1 614 317 8606" className="border border-amber-400 text-amber-500 px-6 py-2 rounded-full font-semibold hover:bg-amber-400 hover:text-white transition">
                Planifier
              </a>
            </div>

            {/* Opción 3 */}
            <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
              <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 8V5M11 5H17M6 12H3M3 9V15M21 11V19M9 12H9.01M12 12H12.01M15 12H15.01M6 8V16H8L10 19H18V10L16 8H6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className="text-lg mb-4 text-slate-700 font-medium">Planifier un rendez-vous de service.</p>
              <a href="tel:+52 1 614 317 8606" className="border border-amber-400 text-amber-500 px-6 py-2 rounded-full font-semibold hover:bg-amber-400 hover:text-white transition">
                Planifier
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Componente para cargar y animar el modelo 3D del coche
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



// // Fondo animado tipo aurora boreal, difuso y llamativo
// function AnimatedAuroraBackground() {
//   return (
//     <div className="fixed inset-0 -z-10 pointer-events-none">
//       <style>{`
//         @keyframes auroraMove1 {
//           0% { transform: translateY(0) translateX(0) scale(1.1) rotate(-2deg); opacity: 0.7; }
//           50% { transform: translateY(-40px) translateX(40px) scale(1.2) rotate(2deg); opacity: 0.9; }
//           100% { transform: translateY(0) translateX(0) scale(1.1) rotate(-2deg); opacity: 0.7; }
//         }
//         @keyframes auroraMove2 {
//           0% { transform: translateY(0) translateX(0) scale(1.2) rotate(3deg); opacity: 0.5; }
//           50% { transform: translateY(60px) translateX(-60px) scale(1.3) rotate(-3deg); opacity: 0.8; }
//           100% { transform: translateY(0) translateX(0) scale(1.2) rotate(3deg); opacity: 0.5; }
//         }
//         @keyframes auroraMove3 {
//           0% { transform: translateY(0) translateX(0) scale(1.1) rotate(0deg); opacity: 0.6; }
//           50% { transform: translateY(-30px) translateX(60px) scale(1.3) rotate(4deg); opacity: 0.8; }
//           100% { transform: translateY(0) translateX(0) scale(1.1) rotate(0deg); opacity: 0.6; }
//         }
//       `}</style>
//       <div style={{
//         position: 'absolute',
//         width: '100vw',
//         height: '100vh',
//         overflow: 'hidden',
//         top: 0,
//         left: 0,
//       }}>
//         {/* Aurora 1 */}
//         <div style={{
//           position: 'absolute',
//           top: '-10%',
//           left: '-10%',
//           width: '60vw',
//           height: '50vh',
//           background: 'linear-gradient(120deg, #ffe066 0%, #fbbf24 60%, #fffbe6 100%)',
//           filter: 'blur(30px)',
//           opacity: 0.7,
//           animation: 'auroraMove1 12s ease-in-out infinite',
//         }} />
//         {/* Aurora 2 */}
//         <div style={{
//           position: 'absolute',
//           bottom: '-15%',
//           right: '-10%',
//           width: '60vw',
//           height: '50vh',
//           background: 'linear-gradient(100deg, #ffd700 0%, #fbbf24 80%, #fffbe6 100%)',
//           filter: 'blur(60px)',
//           opacity: 0.5,
//           animation: 'auroraMove2 16s ease-in-out infinite',
//         }} />
//         {/* Aurora 3 */}
//         <div style={{
//           position: 'absolute',
//           top: '30%',
//           left: '40%',
//           width: '50vw',
//           height: '40vh',
//           background: 'linear-gradient(90deg, #fbbf24 0%, #ffe066 60%, #fffbe6 100%)',
//           filter: 'blur(50px)',
//           opacity: 0.6,
//           animation: 'auroraMove3 18s ease-in-out infinite',
//         }} />
//       </div>
//     </div>
//   );
// }