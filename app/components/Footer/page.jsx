
export default function Footer() {
    return (
      <footer className="bg-gray-50 text-black pt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-12">
          {/* Contacto */}
          <div>
            <h3 className="uppercase font-medium text-xs mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Trouver un distributeur</a></li>
              <li><a href="#" className="hover:underline">Attention aux clients</a></li>
              <li><a href="#" className="hover:underline">Questions frequentes</a></li>
            </ul>
          </div>

          {/* Encuentra tu BMW */}
          <div>
            <h3 className="uppercase font-medium text-xs mb-4">Trouver ton auto</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Disponibilité Inmediate</a></li>
              <li><a href="#" className="hover:underline">Citer ton auto</a></li>
              <li><a href="#" className="hover:underline">Planifie ton test de conduire</a></li>
              <li><a href="#" className="hover:underline">Personalise ton auto </a></li>
              <li><a href="#" className="hover:underline">Liste de prix</a></li>
              <li><a href="#" className="hover:underline">Planifie ton rendez-vous de service</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="uppercase font-medium text-xs mb-4">Juridique</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Note legal</a></li>
            </ul>
          </div>

        {/* Social media */}
        <div className="border-t border-gray-300 py-6">
          <div className="flex flex-wrap justify-center gap-8 text-center text-sm">
            <div className="flex flex-col items-center">
              <img src="/icons/facebook.svg" alt="BMW Facebook" className="w-5 h-5 mb-1" />
              <span>Facebook</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/instagram.svg" alt="BMW Instagram" className="w-5 h-5 mb-1" />
              <span>Instagram</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/x.svg" alt="BMW X" className="w-5 h-5 mb-1" />
              <span>X</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/youtube.svg" alt="BMW YouTube" className="w-5 h-5 mb-1" />
              <span>YouTube</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/linkedin.svg" alt="BMW LinkedIn" className="w-5 h-5 mb-1" />
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
        </div>
      </footer>

    );
  } 