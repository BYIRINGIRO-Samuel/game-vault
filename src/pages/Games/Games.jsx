import React from 'react';
import SideBar from '../../components/SideBar';

const Games = () => {
  return (
    <div className="flex min-h-screen gap-20 mt-14">
      <SideBar />
      <div className="flex justify h-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 bg-white text-black placeholder:text-gray-400"
        />
        <img src="/assets/images/5.jpg" alt="" className='size-10 rounded-full'/>
      </div>
    </div>
  );
};

export default Games;
