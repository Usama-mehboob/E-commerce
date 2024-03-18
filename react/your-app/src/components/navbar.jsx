import React from "react";

function Navbar({ setIsLogin }) {
  return (
    <nav className="bg-gray-800 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-xl">My Awesome App</h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={() => setIsLogin(true)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-2 bg-blue-500"
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium bg-green-500"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;