import Link from 'next/link';
import { div } from 'three/tsl';
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative w-full">
      {/* Navbar con fondo separado */}
      <header className="flex items-center justify-between px-10 py-6">
        <Image src="/voitureicon.PNG" alt="BMW Logo" width={60} height={60} />
        
        <nav className="flex gap-10 text-xl font-bold">
          <Link href="#">Models</Link>
          <Link href="#">Electric</Link>
          <Link href="#">Build & Price</Link>
          <Link href="#">Shop Now</Link>
          <Link href="#">Special Offers</Link>
          <Link href="#">More</Link>
        </nav>

        <div className="flex gap-4 text-2xl">
          {/* Puedes agregar íconos o botones aquí */}
        </div>
      </header>

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