import Image from "next/image";
import { CarModel } from './components/model/carModel';

export default function Home() {
  return (
    <div className="text-center">

      {/* svg en haut */}
      <div className="absolute left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#008080"
          >
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z;
                M0,0 C400,80 800,20 1200,100 L1200,0 L0,0 Z;
                M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z
              "
            />
          </path>
        </svg>
      </div>

      {/* voiture */}
      <div className="flex justify-center mb-6 p-14">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-48 h-24 text-teal-400"
          viewBox="0 0 640 512"
          fill="currentColor"
        >
          <path d="M544 192h-16L466.5 56.4c-5.9-11.7-17.9-18.4-30.9-18.4H204.4c-13 0-25 6.8-30.9 18.4L112 192H96c-53 0-96 43-96 96v32c0 17.7 14.3 32 32 32h32c0 35.3 28.7 64 64 64s64-28.7 64-64h192c0 35.3 28.7 64 64 64s64-28.7 64-64h32c17.7 0 32-14.3 32-32v-32c0-53-43-96-96-96zM204.4 64h231.3l48 96H156.4l48-96zM128 384a32 32 0 1 1 0-64 32 32 0 0 1 0 64zm320 0a32 32 0 1 1 0-64 32 32 0 0 1 0 64z"/>
        </svg>
      </div>

      <CarModel />

      <h1 className="text-8xl font-bold p-4">
        Bienvenue chez AutoQuébec!
      </h1>
      <p className="text-xl p-4 mb-2">
        Découvrez notre vaste inventaire de voitures neuves et usagées à des prix imbattables.
      </p>
      <p className="text-xl mb-6">
        Que vous cherchiez un véhicule économique, un VUS familial ou une voiture de luxe, nous avons ce qu’il vous faut.
      </p>
      <button className="shadow-2xl bg-slate-700 text-teal-400 text-lg font-semibold p-6 rounded hover:bg-slate-400 hover:text-teal-200 transition duration-300">
        Parcourez nos véhicules
      </button>
    </div>
  );
}
