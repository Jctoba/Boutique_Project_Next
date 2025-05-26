"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";

export default function Panier() {

  const stripePromise = loadStripe("pk_test_51RSra5QQLTN5OBcUR31ERy9CWZo2AUMu4VT264djgjJDaiJZ6g4vddGYktyWl33j1n8QIRj0km3yuewnpsGSll8E00UM052QJK");

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

  
  const handleCheckout = async () => {
    try {
      const produits = cart.map(item => ({
        id: item.id,
        produitId: item.id,
        nomProduit: item.title,
        prix: item.prix,
        quantite: item.quantite ?? 1,
        imageURL: item.imageURL,
        dateAjout: new Date().toISOString()
      }));
  
      const response = await fetch("https://projet-prog4e12.cegepjonquiere.ca/api/paiement/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produits)
      });
  
      const data = await response.json();
  
      if (data.sessionId) {
        const stripe = await import('@stripe/stripe-js').then(mod => mod.loadStripe('pk_test_51RSra5QQLTN5OBcUR31ERy9CWZo2AUMu4VT264djgjJDaiJZ6g4vddGYktyWl33j1n8QIRj0km3yuewnpsGSll8E00UM052QJK'));
        const stripeInstance = await stripe;
        await stripeInstance.redirectToCheckout({ sessionId: data.sessionId });
      }
    } catch (error) {
      console.error("Erreur de paiement :", error);
    }
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
          <button onClick={handleCheckout} className="bg-green-500 text-white font-bold px-8 py-3 rounded-full shadow hover:bg-green-600 transition">Finaliser l'achat</button>
        </div>
      </div>
    </div>
  );
}
