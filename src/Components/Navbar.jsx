import React from "react";


const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white">
      <div className="myContainer flex justify-between items-center px-4 py-5 h-14">
        <div className="logo font-bold text-2xl ">
          <span className="text-green-500 font-bold">&lt;</span>
           Pass
           <span className="text-green-500">Pal</span>
          <span className="text-green-500 font-bold">/&gt;</span>
          
        </div>
       
        <a href="https://github.com/mhrshi123/PasswordManager/tree/master" className="text-white bg-green-500 my-2 p-1 rounded-full flex items-center ring-white ring-1">
          <img className="w-10 p-1" src="Icons/github.png" alt="github logo" />
          <span className="font-bold px-2">GitHub</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
