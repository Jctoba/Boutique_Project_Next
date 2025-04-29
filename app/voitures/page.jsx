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
        <div className="container-fluid">            
            <div className="row container-fluid lg:flex">
                {/* {filteredAndSortedVoitures.map((blog) => ( */}
                    <VoitureCard/>
                    <VoitureCard/>
                    <VoitureCard/>
                {/* ))} */}
            </div>
      </div>
    );
}