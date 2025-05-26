'use client'
import Link from 'next/link';
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
      
      if (token) {
        try {
          const decoded = jwtDecode(token);
          const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
          setIsAdmin(role === "Admin");
        } catch (error) {
          console.error('Error decoding token:', error);
          setIsAdmin(false);
        }
      }

      const panier = JSON.parse(localStorage.getItem("panier") || "[]");
      setCartCount(panier.length);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false);
    window.location.href = "/";
  };

  return (
    <div className="relative w-full">
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-slate-900 to-black/80 shadow-xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="text-2xl md:text-3xl font-extrabold text-amber-400 tracking-wide drop-shadow">AutoQuébec</a>
          </div>

          {/* Navbar links (desktop) */}
          <nav className="hidden md:flex flex-row items-center gap-6 text-base md:text-lg font-semibold">
            {isAdmin ? (
              <Link href="/admin" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Gestion des Voitures</Link>
            ) : (
              <>
                <Link href="/voitures" className="text-amber-200 hover:text-amber-400 transition drop-shadow">
                  Catalogue
                </Link>
                <Link href="/voitures?filtre=prix-asc" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Le plus cher</Link>
                <Link href="/voitures?filtre=prix-desc" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Le moins cher</Link>
                <Link href="/voitures?filtre=stock" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Plus de stock</Link>
                <Link href="/voitures?filtre=stock-asc" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Moins de stock</Link>
                <Link href="#" className="text-amber-200 hover:text-amber-400 transition drop-shadow">Contact</Link>
              </>
            )}
          </nav>

          {/* User actions */}
          <div className="flex items-center">
            {isLoggedIn ? (
              <div className="flex items-center">
                {!isAdmin && (
                  <Link href="/panier" className="relative p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 shadow">{cartCount}</span>
                    )}
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="ml-2 md:ml-6 px-4 md:px-6 py-2 rounded-full bg-red-500 text-white font-bold shadow-lg hover:bg-red-600 transition-all"
                >
                  Se déconnecter
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 md:gap-4 ml-2 md:ml-8">
                <a href="/login" className="ml-2 md:ml-6 px-4 md:px-6 py-2 rounded-full bg-amber-400 text-slate-900 font-bold shadow-lg hover:bg-amber-500 transition-all">Login</a>
              </div>
            )}

            {/* Mobile menu button */}
            <button className="md:hidden ml-2 p-2 rounded hover:bg-slate-800" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-amber-300">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-amber-300/20">
            <nav className="flex flex-col p-4">
              {isAdmin ? (
                <>
                  <Link href="/admin" className="text-amber-200 hover:text-amber-400 py-2">Gestion des Voitures</Link>
                </>
              ) : (
                <>
                  <Link href="/voitures" className="text-amber-200 hover:text-amber-400 py-2">Catalogue</Link>
                  <Link href="/voitures?filtre=prix-asc" className="text-amber-200 hover:text-amber-400 py-2">Le plus cher</Link>
                  <Link href="/voitures?filtre=prix-desc" className="text-amber-200 hover:text-amber-400 py-2">Le moins cher</Link>
                  <Link href="/voitures?filtre=stock" className="text-amber-200 hover:text-amber-400 py-2">Plus de stock</Link>
                  <Link href="/voitures?filtre=stock-asc" className="text-amber-200 hover:text-amber-400 py-2">Moins de stock</Link>
                  <Link href="#" className="text-amber-200 hover:text-amber-400 py-2">Contact</Link>
                </>
              )}
            </nav>
          </div>
        )}
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