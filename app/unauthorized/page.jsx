'use client';
import Link from 'next/link';

export default function Unauthorized() {
    return (
        <div className="min-h-screen pt-40 flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-800">
            <div className="text-center p-8 rounded-2xl bg-white/10 border border-red-400 shadow-2xl max-w-lg w-full mx-4">
                <h1 className="text-4xl font-bold text-red-500 mb-4">Accès Non Autorisé</h1>
                <p className="text-slate-200 mb-6">
                    Vous n'avez pas les permissions nécessaires pour accéder à cette page.
                    Veuillez contacter un administrateur si vous pensez qu'il s'agit d'une erreur.
                </p>
                <Link 
                    href="/"
                    className="inline-block bg-amber-400 text-slate-900 px-6 py-2 rounded-full font-bold hover:bg-amber-500 transition-all"
                >
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
} 