'use client';
import { useEffect, useState } from "react";
import VoitureCard from "./voitureCard/page";
import { title } from "process";

export default function Voitures() {
    const [voitures, setVoitures] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVoitures = async () => {
            try {
                const response = await fetch("https://projet-prog4e12.cegepjonquiere.ca/api/Produits");
                if (!response.ok) throw new Error("Erreur lors de la récupération des voitures");
                const data = await response.json();
                setVoitures(data);
            } catch (err) {
                // Si hay error, muestra ejemplos locales
                setVoitures([
                  {
                    id: 1,
                    title: "FIAT",
                    prix: 1501,
                    description: "Nouveau et nice",
                    imageURL: "",
                    nom_Restant_Inv: 7
                  },
                  {
                    id: 2,
                    title: "Nissan GT-R",
                    prix: 150000,
                    description: "Nouveau",
                    imageURL: "",
                    nom_Restant_Inv: 4
                  },
                  {
                    id: 3,
                    title: "Peugeot 208",
                    prix: 21000,
                    description: "Compacte et économique",
                    imageURL: "",
                    nom_Restant_Inv: 12
                  }
                ]);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchVoitures();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br pt-40 from-slate-900 via-black to-slate-800 py-12 px-2">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 text-center mb-10 drop-shadow-lg">Catalogue des voitures</h1>
                <p className="text-lg text-slate-200 text-center mb-12 max-w-2xl mx-auto">Découvrez notre inventaire</p>
                {isLoading && <div className="text-center text-slate-200">Chargement...</div>}
                {error && <div className="text-center text-red-400">Erreur lors de la récupération des voitures</div>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                    {voitures.map((v, idx) => (
                        <VoitureCard key={v.id || idx} {...v} />
                    ))}
                </div>
            </div>
        </div>
    );
}