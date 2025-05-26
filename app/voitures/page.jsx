'use client';
import { useEffect, useState, useMemo } from "react";
import VoitureCard from "./voitureCard/page";
import { useSearchParams } from 'next/navigation';

export default function Voitures() {
    const [voitures, setVoitures] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const searchParams = useSearchParams();
    const filtre = searchParams ? searchParams.get('filtre') : null;

    useEffect(() => {
        const fetchVoitures = async () => {
            try {
                const token = localStorage.getItem("token");
                const url = "https://projet-prog4e12.cegepjonquiere.ca/api/Produits/";

                const response = await fetch(url, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) throw new Error("Erreur lors de la récupération des voitures");
                const data = await response.json();
                setVoitures(data);
            } catch (err) {
                console.error('Fetch error:', err);
               
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchVoitures();
    }, []); // Ya no depende del filtro

    const voituresFiltrees = useMemo(() => {
        if (!filtre) return voitures
    
        let sorted = [];
    
        switch (filtre) {
            case 'prix-asc':
                sorted = [...voitures].sort((a, b) => a.prix - b.prix); // menor a mayor
                break;
            case 'prix-desc':
                sorted = [...voitures].sort((a, b) => b.prix - a.prix); // mayor a menor
                break;
            case 'stock':
                sorted = [...voitures].sort((a, b) => b.nom_Restant_Inv - a.nom_Restant_Inv);
                break;
            case 'stock-asc':
                sorted = [...voitures].sort((a, b) => a.nom_Restant_Inv - b.nom_Restant_Inv);
                break;
            default:
                sorted = voitures;
        }
    
        return sorted.slice(0, 2); // Top 2 del filtro
    }, [voitures, filtre]);
    
    return (
        <div className="min-h-screen pt-40 py-12 px-2">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 text-center mb-10 drop-shadow-lg">
                    Catalogue des voitures
                </h1>
                <p className="text-lg text-slate-200 text-center mb-12 max-w-2xl mx-auto">
                    Découvrez notre inventaire
                </p>
                {isLoading && <div className="text-center text-slate-200">Chargement...</div>}
                {error && (
                    <div className="text-center text-red-400 mb-4">
                        Erreur lors de la récupération des voitures
                    </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
                    {voituresFiltrees.map((v, idx) => (
                        <VoitureCard key={v.id || idx} {...v} />
                    ))}
                </div>
            </div>
        </div>
    );
}