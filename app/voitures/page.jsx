import VoitureCard from "./voitureCard/page";

export default function Voitures() {
    // const [blogs, setBlogs] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [searchTerm, setSearchTerm] = useState('');
    // const [sortBy, setSortBy] = useState('date');

    // useEffect(() => {
    //     const fetch = async () => {
    //         try {
    //             const response = await fetch('http://localhost:3000/#');
    //             const data = await response.json();
    //             setBlogs(data);
    //         } catch (error) {
    //             const localBlogs = await getAllBlogs();
    //             setBlogs(localBlogs || []);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     };

    //     fetch();
    // }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br pt-40 from-slate-900 via-black to-slate-800 py-12 px-2">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400 text-center mb-10 drop-shadow-lg">Catalogue des voitures</h1>
                <p className="text-lg text-slate-200 text-center mb-12 max-w-2xl mx-auto">Découvrez notre inventaire</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <VoitureCard />
                    <VoitureCard />
                    <VoitureCard />
                </div>
            </div>
        </div>
    );
}