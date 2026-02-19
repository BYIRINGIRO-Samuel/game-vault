import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [activePage, setActivePage] = useState(1);

    const fetchMovies = async () => {
        try {
            const res = await axios.get(
                `https://www.omdbapi.com/?s=movie&type=movie&page=${activePage}&apikey=d178727a` // Corrected API URL
            );
            setMovies(res.data.Search);
        } catch (err) {
            console.error("Failed to fetch movies:", err);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, [activePage]);

    return (
        <>
            <div className="fixed z-50">
                <Navbar />
            </div>

            <div className="">
                <img src="/assets/images/img.jpg" alt="" className='w-full h-[85vh] object-cover' />
            </div>
            <div className="flex flex-col items-center px-4 py-10"><br />
                <p className="text-center text-3xl font-bold mb-12">Movie Recommendations</p><br />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
                    {movies && movies.map((movie) => (
                        <div
                            key={movie.imdbID}
                            className="w-[170px] h-[240px] relative overflow-hidden rounded-xl shadow-md bg-gray-800"
                        >
                            <img
                                src={movie.Poster}
                                alt={movie.Title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-5 left-2 text-white px-2 py-1 text-sm font-semibold z-10">
                                {movie.Title}
                            </div>
                        </div>
                    ))}
                </div><br />
                <div className="flex gap-3 items-center mt-10">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button
                            key={num}
                            onClick={() => setActivePage(num)}
                            className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ease-in-out shadow-sm
              ${activePage === num
                                    ? 'bg-indigo-600 text-white border-indigo-600 scale-110'
                                    : 'border-2 border-gray-300 text-gray-700 hover:bg-indigo-100 hover:border-indigo-500'
                                }`}
                        >
                            {num}
                        </button>
                    ))}
                </div><br />
            </div>
            <Footer />
        </>
    );
};

export default Movies;
