'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Link from 'next/link';

export default function AdminDashboard() {
    const { isAuthenticated, userRole, isLoading } = useAuth('Admin');
    const [voitures, setVoitures] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingVoiture, setEditingVoiture] = useState(null);
    const emptyVoiture = {
        name: '',
        prix: '',
        description: '',
        imageURL: '',
        nom_Restant_Inv: ''
    };
    const [newVoiture, setNewVoiture] = useState(emptyVoiture);

    useEffect(() => {
        if (isAuthenticated) {
            fetchVoitures();
        }
    }, [isAuthenticated]);

    const fetchVoitures = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('https://projet-prog4e12.cegepjonquiere.ca/api/Produits', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error('Erreur de chargement');
            const data = await response.json();
            setVoitures(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cette voiture ?')) return;
        
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`https://projet-prog4e12.cegepjonquiere.ca/api/Produits/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData || 'Erreur de suppression');
            }
            await fetchVoitures();
        } catch (err) {
            console.error('Delete error:', err);
            setError(err.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const voiture = editingVoiture ? { ...editingVoiture, ...newVoiture } : newVoiture;

        try {
            const voitureData = {
                ...voiture,
                prix: Number(voiture.prix) || 0,
                nom_Restant_Inv: Number(voiture.nom_Restant_Inv) || 0
            };

            const response = await fetch(
                editingVoiture 
                    ? `https://projet-prog4e12.cegepjonquiere.ca/api/Produits/admin/${editingVoiture.id}`
                    : 'https://projet-prog4e12.cegepjonquiere.ca/api/Produits/admin',
                {
                    method: editingVoiture ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(voitureData)
                }
            );

            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(errorData || (editingVoiture ? 'Erreur de modification' : 'Erreur d\'ajout'));
            }
            
            setEditingVoiture(null);
            setNewVoiture(emptyVoiture);
            await fetchVoitures();
        } catch (err) {
            console.error('Submit error:', err);
            setError(err.message);
        }
    };

    const handleEdit = (voiture) => {
        setEditingVoiture(voiture);
        setNewVoiture({
            name: voiture.name || '',
            prix: voiture.prix?.toString() || '',
            description: voiture.description || '',
            imageURL: voiture.imageURL || '',
            nom_Restant_Inv: voiture.nom_Restant_Inv?.toString() || ''
        });
    };

    const handleCancel = () => {
        setEditingVoiture(null);
        setNewVoiture(emptyVoiture);
    };

    if (isLoading) {
        return <div className="min-h-screen pt-40 text-center text-white">Chargement...</div>;
    }

    if (!isAuthenticated || userRole !== 'Admin') {
        return null;
    }

    return (
        <div className="min-h-screen pt-40 px-4 pb-4 bg-gradient-to-br from-slate-900 via-black to-slate-800">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-amber-400 mb-8">Administration des Voitures</h1>
                
                <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-xl mb-8 border border-amber-300">
                    <h2 className="text-2xl font-bold text-amber-400 mb-4">
                        {editingVoiture ? 'Modifier la voiture' : 'Ajouter une voiture'}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Nom"
                            value={newVoiture.name}
                            onChange={(e) => setNewVoiture({...newVoiture, name: e.target.value})}
                            className="bg-white/5 text-white p-2 rounded border border-amber-200"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Prix"
                            value={newVoiture.prix}
                            onChange={(e) => setNewVoiture({...newVoiture, prix: e.target.value})}
                            className="bg-white/5 text-white p-2 rounded border border-amber-200"
                            required
                        />
                        <input
                            type="text"
                            placeholder="URL de l'image"
                            value={newVoiture.imageURL}
                            onChange={(e) => setNewVoiture({...newVoiture, imageURL: e.target.value})}
                            className="bg-white/5 text-white p-2 rounded border border-amber-200"
                        />
                        <input
                            type="number"
                            placeholder="Stock"
                            value={newVoiture.nom_Restant_Inv}
                            onChange={(e) => setNewVoiture({...newVoiture, nom_Restant_Inv: e.target.value})}
                            className="bg-white/5 text-white p-2 rounded border border-amber-200"
                            required
                        />
                        <textarea
                            placeholder="Description"
                            value={newVoiture.description}
                            onChange={(e) => setNewVoiture({...newVoiture, description: e.target.value})}
                            className="bg-white/5 text-white p-2 rounded border border-amber-200 md:col-span-2"
                            required
                        />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            type="submit"
                            className="bg-amber-400 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-amber-500"
                        >
                            {editingVoiture ? 'Modifier' : 'Ajouter'}
                        </button>
                        {editingVoiture && (
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-slate-600 text-white px-6 py-2 rounded-full font-bold hover:bg-slate-700"
                            >
                                Annuler
                            </button>
                        )}
                    </div>
                </form>

                <div className="bg-white/10 rounded-xl border border-amber-300">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-amber-400/10">
                                <tr>
                                    <th className="p-4 text-left text-amber-400">Nom</th>
                                    <th className="p-4 text-left text-amber-400">Prix</th>
                                    <th className="p-4 text-left text-amber-400">Stock</th>
                                    <th className="p-4 text-left text-amber-400">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {voitures.map((voiture) => (
                                    <tr key={voiture.id} className="border-t border-amber-300/20">
                                        <td className="p-4 text-white">{voiture.name}</td>
                                        <td className="p-4 text-white">{voiture.prix} $</td>
                                        <td className="p-4 text-white">{voiture.nom_Restant_Inv}</td>
                                        <td className="p-4">
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleEdit(voiture)}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                                >
                                                    Modifier
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(voiture.id)}
                                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                                >
                                                    Supprimer
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {error && (
                    <div className="mt-4 p-4 bg-red-500/10 border border-red-500 rounded-xl text-red-500">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
} 