"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [registerData, setRegisterData] = useState({ username: "", email: "", password: "" });
  const [registerError, setRegisterError] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);
  const router = useRouter();

  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjI3ZDlmMzI3LWI2NWYtNGU4NC05ZjdmLTExNDdlOTE0MmEwYiIsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE3NDg4MjA0MjMsImlzcyI6IkJvdXRpcXVlQVBJIiwiYXVkIjoiQm91dGlxdWVBUElDbGllbnQifQ.5Y3M0FqRy4FsQ1mrqvs0z8kSVHjdJyZJUMtLjCDmAIo"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("https://projet-prog4e12.cegepjonquiere.ca/api/Accounts/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
        token: token  
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.token) {
          localStorage.setItem("token", data.token);
        }
        router.push("/voitures");
      } else {
        setError("Nom d'utilisateur ou mot de passe incorrect");
      }
    } catch (err) {
      console.log('%capp\login\page.jsx:39 err', 'color: #007acc;', err);
      setError("Erreur lors de la conexion");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError("");
    setRegisterLoading(true);
    try {
      const res = await fetch("https://projet-prog4e12.cegepjonquiere.ca/api/Accounts/register-client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });
      if (res.ok) {
        setShowRegister(false);
        setRegisterData({ username: "", email: "", password: "" });
        alert("Utilisateur créé avec succès");
      } else {
        setRegisterError("Erreur lors de la création");
      }
    } catch (err) {
      setRegisterError("Erreur lors de la création");
    } finally {
      setRegisterLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-800">
      <div className="w-full max-w-md">
        {!showRegister ? (
          <form onSubmit={handleSubmit} className="bg-white/20 p-8 rounded-2xl shadow-2xl flex flex-col gap-6 border border-amber-300">
            <h1 className="text-3xl font-bold text-center text-amber-500 mb-2">Connexion</h1>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none text-white focus:ring-2 focus:ring-amber-400"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none text-white focus:ring-2 focus:ring-amber-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {error && <div className="text-red-600 text-center">{error}</div>}
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 rounded-lg transition-all shadow-lg disabled:opacity-60"
              disabled={loading}
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
            <button
              type="button"
              className="text-amber-500 hover:underline mt-2"
              onClick={() => setShowRegister(true)}
            >
              Pas de compte ? S'inscrire
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="bg-white/20 p-8 rounded-2xl shadow-2xl flex flex-col gap-6 border border-amber-300">
            <h1 className="text-3xl font-bold text-center text-amber-500 mb-2">Inscription</h1>
            <input
              type="text"
              placeholder="Nom d'utilisateur"
              className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none text-white focus:ring-2 focus:ring-amber-400"
              value={registerData.username}
              onChange={e => setRegisterData({ ...registerData, username: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none text-white focus:ring-2 focus:ring-amber-400"
              value={registerData.email}
              onChange={e => setRegisterData({ ...registerData, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="px-4 py-3 rounded-lg border border-slate-300 focus:outline-none text-white focus:ring-2 focus:ring-amber-400"
              value={registerData.password}
              onChange={e => setRegisterData({ ...registerData, password: e.target.value })}
              required
            />
            {registerError && <div className="text-red-600 text-center">{registerError}</div>}
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 rounded-lg transition-all shadow-lg disabled:opacity-60"
              disabled={registerLoading}
            >
              {registerLoading ? "Inscription..." : "S'inscrire"}
            </button>
            <button
              type="button"
              className="text-amber-500 hover:underline mt-2"
              onClick={() => setShowRegister(false)}
            >
              Vous avez déjà un compte ? Se connecter
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
