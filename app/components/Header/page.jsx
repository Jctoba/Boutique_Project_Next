import Link from 'next/link';
import { div } from 'three/tsl';

export default function Header() {
  return (
    <div className="relative w-full">
      

      {/* Navbar con fondo separado */}
      <div className="sticky top-0 z-20 bg-white/30 backdrop-blur-md shadow-md border-b border-white/20 p-10">
        <Link href="/" className="btn btn-primary btn-lg mx-4 text-right p-4 border border-white/20 rounded hover:bg-slate-400">
          Bienvenue
        </Link>
        <Link href="/voitures" className="btn btn-primary btn-lg mx-4 text-right p-4 border border-white/20 rounded hover:bg-slate-400">
          Voir les voitures
        </Link>
        <Link href="/voitures" className="btn btn-primary btn-lg mx-4 text-right p-4 border border-white/20 rounded hover:bg-slate-400">
          Contactez-nous
        </Link>
      </div>

      {/* SVG background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -z-20">
        <svg
          className="block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,0 L0,0 Z"
            fill="#D5AB1F"
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
    </div>
  );
}