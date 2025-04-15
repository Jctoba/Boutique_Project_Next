import Link from 'next/link';

export default async function VoitureDetails({ params }) {
    const { id } = params;

    return (
        <div className="container mt-5">
            <h1>Détails de la voiture {id}</h1>
            <Link href="/voitures" className="btn btn-secondary mt-3">
                Retour 
            </Link>
        </div>
    );
}