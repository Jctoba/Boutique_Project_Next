"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminVoitures() {
  const [voitures, setVoitures] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: "", prix: "", description: "", imageURL: "", nom_Restant_Inv: "" });
  const [editId, setEditId] = useState(null);

  // Verifica si el usuario es admin
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const payload = JSON.parse(atob(token.split('.')[1]));
          // Ajusta el claim según tu JWT, aquí se asume 'role' o 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
          const role = payload.role || payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          setIsAdmin(role === 'Admin');
        } catch {
          setIsAdmin(false);
        }
      }
    }
  }, []);

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white">
        <h1 className="text-3xl font-bold mb-6">Accès réservé aux administrateurs</h1>
        <Link href="/" className="bg-amber-400 text-black font-bold px-6 py-3 rounded-full shadow hover:bg-amber-500 transition">Retour à l'accueil</Link>
      </div>
    );
  }

  // Fetch all cars
  const fetchVoitures = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("https://projet-prog4e12.cegepjonquiere.ca/api/Produits", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setVoitures(data);
      setError(null);
    } catch (err) {
      setError("Erreur lors de la récupération des voitures");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchVoitures(); }, []);

  // Handle form change
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  // Create or update car
  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const method = editId ? "PUT" : "POST";
    const url = editId
      ? `https://projet-prog4e12.cegepjonquiere.ca/api/Produits/admin/${editId}`
      : "https://projet-prog4e12.cegepjonquiere.ca/api/Produits/admin";
    const body = JSON.stringify({ ...form, id: editId });
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body,
    });
    if (res.ok) {
      setForm({ name: "", prix: "", description: "", imageURL: "", nom_Restant_Inv: "" });
      setEditId(null);
      fetchVoitures();
    } else {
      alert("Erreur lors de l'enregistrement");
    }
  };

  // Edit car
  const handleEdit = v => {
    setForm({
      name: v.name || v.title || "",
      prix: v.prix || "",
      description: v.description || "",
      imageURL: v.imageURL || "",
      nom_Restant_Inv: v.nom_Restant_Inv || "",
    });
    setEditId(v.id);
  };

  // Delete car
  const handleDelete = async id => {
    if (!confirm("Supprimer cette voiture?")) return;
    const token = localStorage.getItem("token");
    const res = await fetch(`https://projet-prog4e12.cegepjonquiere.ca/api/Produits/admin/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) fetchVoitures();
    else alert("Erreur lors de la suppression");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 pt-36 px-4">
      <div className="max-w-4xl mx-auto bg-white/20 rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-amber-500 mb-8 text-center">Admin - Gestion des voitures</h1>
        <form onSubmit={handleSubmit} className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Nom" className="p-3 rounded-lg" required />
          <input name="prix" value={form.prix} onChange={handleChange} placeholder="Prix" type="number" className="p-3 rounded-lg" required />
          <input name="imageURL" value={form.imageURL} onChange={handleChange} placeholder="Image URL" className="p-3 rounded-lg" />
          <input name="nom_Restant_Inv" value={form.nom_Restant_Inv} onChange={handleChange} placeholder="Stock" type="number" className="p-3 rounded-lg" />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="p-3 rounded-lg md:col-span-2" />
          <button type="submit" className="bg-amber-500 text-white font-bold py-3 rounded-lg shadow-lg md:col-span-2">
            {editId ? "Modifier" : "Ajouter"}
          </button>
        </form>
        {isLoading ? (
          <div className="text-center text-slate-200">Chargement...</div>
        ) : error ? (
          <div className="text-center text-red-400">{error}</div>
        ) : (
          <table className="w-full text-white bg-black/30 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-amber-400 text-black">
                <th className="p-2">Nom</th>
                <th className="p-2">Prix</th>
                <th className="p-2">Stock</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {voitures.map(v => (
                <tr key={v.id} className="border-b border-amber-200">
                  <td className="p-2">{v.name || v.title}</td>
                  <td className="p-2">{v.prix} $</td>
                  <td className="p-2">{v.nom_Restant_Inv}</td>
                  <td className="p-2 flex gap-2">
                    <button onClick={() => handleEdit(v)} className="bg-blue-500 px-3 py-1 rounded text-white">Éditer</button>
                    <button onClick={() => handleDelete(v.id)} className="bg-red-500 px-3 py-1 rounded text-white">Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="mt-8 text-center">
          <Link href="/" className="text-amber-400 hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}
