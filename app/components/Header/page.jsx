import Link from 'next/link';

export default function Header() {
  return (
    <div className="container py-5 flex bg-slate-500 w-full">
      <Link href="/" className="btn btn-primary btn-lg mx-4 text-right">
        Bienvenue
      </Link>
      <Link href="/voitures" className="btn btn-primary btn-lg mx-4 text-right">
        Voir les voitures
      </Link>
    </div>
  );
}