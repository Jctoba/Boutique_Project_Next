'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function VoitureCard({ id, title, name, description, prix, imageURL, nom_Restant_Inv }) {
    const router = useRouter();
    const displayTitle = title || name || "Voiture";

    // Añadir al carrito (localStorage)
    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const car = { id, title: displayTitle, prix, imageURL, nom_Restant_Inv };
        // Evita duplicados
        if (!cart.find(item => item.id === id)) {
            cart.push(car);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('Ajouté au panier !');
        } else {
            alert('Déjà dans le panier');
        }
    };

    return (
        <div className="flex flex-col bg-white/20 shadow-2xl rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-amber-200">
            <div className="flex-1 flex flex-col items-center">
                <Image
                    src={imageURL || "/bugatti.jpg"}
                    width={320}
                    height={200}
                    alt={displayTitle}
                    className="rounded-xl object-cover mb-4 shadow-lg border-2 border-amber-100"
                />
                <h5 className="text-2xl font-bold text-white mb-1 text-center">{displayTitle}</h5>
                <p className="text-lg text-amber-500 font-semibold mb-2">{prix ? prix + ' $' : ''}</p>
                <p className="text-white mb-4 text-center min-h-[48px]">{description}</p>
                <div className="flex items-center justify-between w-full mb-4">
                    <span className="text-xs text-white">Stock: <span className="font-bold text-amber-600">{nom_Restant_Inv ?? '-'}</span></span>
                </div>
                <div className="flex gap-2 w-full justify-center">
                  <Link 
                      href={`/voitures/voitureDetails/${id}`}
                      className="inline-block bg-amber-400 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-amber-500 transition-all"
                  >
                      Voir détails
                  </Link>
                  <button
                    onClick={handleAddToCart}
                    className="inline-block bg-green-500 text-white font-bold px-6 py-2 rounded-full shadow hover:bg-green-600 transition-all"
                  >
                    Ajouter au panier
                  </button>
                </div>
            </div>
        </div>
    );
}