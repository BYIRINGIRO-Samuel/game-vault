import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [games, setGames] = useState([]);
  const [activePage, setActivePage] = useState(1);

  const fetchGames = async () => {
    try {
      const res = await axios.get(
        `https://api.rawg.io/api/games?key=73abf8e99f8d44208e3134f469867653&page=${activePage}`
      );
      setGames(res.data.results);
    } catch (err) {
      console.error("Failed to fetch games:", err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, [activePage]);

  return (
    <div className="flex flex-col items-center px-4 py-10">
      <p className="text-center text-3xl font-bold mb-12 text-white">Recommendations</p><br /><br />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
        {games.slice(0, 25).map((game) => (
          <div
            key={game.id}
            className="w-[190px] h-[260px] relative overflow-hidden rounded-xl shadow-md bg-gray-800"
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-full object-cover"
            />
            <img
              src="/assets/images/add_icon_white.png"
              alt="Add"
              className="absolute top-2 right-1 size-7 cursor-pointer"
            />
            <img
              src="/assets/images/rating.png"
              alt="Rating"
              className="absolute bottom-0 right-1 size-16"
            />
            <div className="absolute bottom-5 left-2 text-white px-2 py-1 text-sm font-semibold z-10">
              {game.name}
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
              ${
                activePage === num
                  ? 'bg-indigo-600 text-white border-indigo-600 scale-110'
                  : 'border-2 border-gray-300 text-gray-700 hover:bg-indigo-100 hover:border-indigo-500'
              }`}
          >
            {num}
          </button>
        ))}
      </div><br />
    </div>
  );
};

export default Recommendations;
