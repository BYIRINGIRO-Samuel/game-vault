import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sidebarLinks } from '../constanst/index.js';

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="hidden md:flex px-6 py-10 flex-col justify-between max-w-[220px] bg-dark-2 text-white">
      <div className="flex flex-col gap-10">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/assets/images/joystick.png" alt="logo" width={35} height={35} />
          <p className="text-blue-700 text-2xl font-bold">
            GameVault
          </p>
        </Link>

        <ul className="flex flex-col gap-3">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;

            return (
              <li key={link.label}>
                <Link
                  to={link.route}
                  className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white' 
                      : 'text-purple-300 hover:bg-blue-600 hover:text-white h-10' 
                  }`}
                >
                  <img
                    src={link.imgURL}
                    alt={link.label}
                    className={`w-5 h-5 ${
                      isActive ? 'filter invert brightness-0' : 'opacity-70'
                    }`}
                  />
                  <span className="text-md">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default SideBar;
