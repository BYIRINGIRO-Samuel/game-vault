import React from 'react';
import SideBar from '../../components/SideBar';

const Games = () => {
  return (
    // Main container with flex layout and minimum full screen height
    <div className="flex min-h-screen gap-20 mt-14">
      {/* Sidebar navigation component for game categories and filters */}
      <SideBar />
      
      {/* Search and profile section */}
      <div className="flex justify h-8">
        {/* Search input field for games */}
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 bg-white text-black placeholder:text-gray-400"
        />
        
        {/* User profile avatar image */}
        <img src="/assets/images/5.jpg" alt="" className='size-10 rounded-full'/>
      </div>
    </div>
  );
};

export default Games;
