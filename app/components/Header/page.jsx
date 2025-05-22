import Link from 'next/link';
import { div } from 'three/tsl';
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative w-full">
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-6 bg-gradient-to-r from-black via-slate-900 to-black/80 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Image  href="#" src="/voitureicon.PNG" alt="AutoQuébec Logo" width={48} height={48} className="drop-shadow-lg" />
          <a  href="/" className="text-3xl font-extrabold text-amber-400 tracking-wide drop-shadow">AutoQuébec</a>
        </div>
        <nav className="flex gap-8 text-lg font-semibold justify-center w-full">
          <Link href="#" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Models</Link>
          <Link href="#" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Electric</Link>
          <Link href="#" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Build & Price</Link>
          <Link href="#" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Shop Now</Link>
          <Link href="#" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Special Offers</Link>
          <Link href="#" className="text-amber-200 hover:text-amber-400 transition drop-shadow">More</Link>
        </nav>
      </header>
      {/* SVG background */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -z-20">
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
      </div> */}
    </div>
  );
}