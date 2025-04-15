import Link from 'next/link';

export default function VoitureCard({ id, title, description, author, date }) {
    return (
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card w-1/3 h-auto" style={{backgroundColor: "#393E46"}}>
                <div className="card-body text-white">
                    <h5 className="card-title">{title}</h5> 
                    <h6 className="card-subtitle mb-2 text-body-secondary">{author}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text">
                        <small className="text-body-secondary">{date}</small>
                    </p>
                    <Link 
                        href={`voitures/voitureDetails/1`}
                        className="btn btn-primary"
                    >
                       Voir details
                    </Link>
                </div>
            </div>
        </div>
    );
}