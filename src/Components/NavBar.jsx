import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between bg-blue-500 p-6">
        <div className="flex gap-2">
          <Link to="/" className="text-white">Workout</Link>
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px" fill="#EFEFEF">
            <path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z"/>
          </svg>
        </div>
        <div className="flex justify-between gap-[4rem] hidden md:flex">
          <Link to="/dashboard" className="text-white">Progress Dashboard</Link>
          <Link to="/goals" className="text-white">Goals</Link>
        </div>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 0 24 24" width="22px" fill="#EFEFEF">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-start bg-blue-500 p-6 md:hidden">
          <Link to="/dashboard" className="text-white mb-2">Progress Dashboard</Link>
          <Link to="/goals" className="text-white">Goals</Link>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default NavBar;
