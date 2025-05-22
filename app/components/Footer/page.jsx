import Image from 'next/image';

export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-black via-slate-900 to-black/80 text-amber-200 pt-12 shadow-2xl backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-12">
          {/* Contacto */}
          <div>
            <h3 className="uppercase font-bold text-xs mb-4 text-amber-400 tracking-wider">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline hover:text-amber-300 transition">Attention aux clients</a></li>
              <li><a href="#" className="hover:underline hover:text-amber-300 transition">Questions frequentes</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="uppercase font-bold text-xs mb-4 text-amber-400 tracking-wider">Juridique</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline hover:text-amber-300 transition">Note legal</a></li>
            </ul>
          </div>

        {/* Social media */}
        <div className="col-span-2 flex flex-col justify-center items-center border-t border-amber-400 py-6 mt-8 md:mt-0">
          <div className="flex flex-wrap justify-center gap-8 text-center text-sm">
            <div className="flex flex-col items-center">
              <img src="/facebook.png" alt="BMW Facebook" className="w-6 h-6 mb-1" />
              <span>Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/insta.png" alt="BMW Instagram" className="w-6 h-6 mb-1" />
              <span>Instagram</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/x.png" alt="BMW X" className="w-6 h-6 mb-1" />
              <span>X</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/youtube.png" alt="BMW YouTube" className="w-6 h-6 mb-1" />
              <span>YouTube</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/linkedin.png" alt="BMW LinkedIn" className="w-6 h-6 mb-1" />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
        </div>
        <div className="text-center text-xs text-amber-300 py-4 bg-black/60 ">
          © {new Date().getFullYear()} AutoQuébec. Tous droits réservés.
        </div>
      </footer>

    );
  }