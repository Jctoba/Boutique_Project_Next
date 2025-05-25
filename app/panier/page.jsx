"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Panier() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCart(JSON.parse(localStorage.getItem("cart") || "[]"));
    }
  }, []);

  const handleRemove = (id) => {
    const newCart = cart.filter(item => item.id !== id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-black to-white text-white">
        <h1 className="text-3xl font-bold mb-6">Votre panier est vide</h1>
        <Link href="/voitures" className="bg-amber-400 text-white font-bold px-6 py-3 rounded-full shadow hover:bg-amber-500 transition">Voir le catalogue</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 pt-36 px-4">
      <div className="max-w-3xl mx-auto bg-white/20 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-amber-500 mb-8 text-center">Votre panier</h1>
        <ul className="divide-y divide-amber-200">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center gap-6 py-6">
              <Image src={item.imageURL || "/bugatti.jpg"} width={100} height={60} alt={item.title} className="rounded-xl border border-amber-200" />
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white">{item.title}</h2>
                <p className="text-white text-sm mb-1">{item.prix} $</p>
                <span className="text-xs text-white">Stock: <span className="font-bold text-amber-600">{item.nom_Restant_Inv ?? '-'}</span></span>
              </div>
              <button onClick={() => handleRemove(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-full font-bold hover:bg-red-600 transition">Supprimer</button>
            </li>
          ))}
        </ul>
        <div className="flex justify-end mt-8">
          <button className="bg-green-500 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-green-600 transition">Finaliser l'achat</button>
        </div>
      </div>
    </div>
  );
}
