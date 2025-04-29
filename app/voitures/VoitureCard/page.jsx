import Image from 'next/image';
import Link from 'next/link';

export default function VoitureCard({ id, title, description, author, date }) {
    return (
        <div className="flex bg-slate-500 card h-auto m-4 p-4 rounded shadow-2xl">
            <div className="card-body text-white">
                <h5 className="card-title">{title}</h5> 
                <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
                <p className="card-text">{description}</p>
                <Image
                src="/bugatti.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
                className='rounded'
                />
                <Link 
                    href={`voitures/voitureDetails/1`}
                    className="btn btn-primary"
                >
                    Voir details
                </Link>
            </div>
        </div>
    );
}