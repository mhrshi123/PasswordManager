import React from "react";

const Footer = () => {

    return (
        <div className="bg-slate-800 text-white flex flex-col gap-4 justify-center w-full items-center text-xl">
            <div >
                <span className="text-green-500 font-bold text-2xl ">&lt;</span>
             
                <span className="text-2xl">Pass</span>
                <span className="text-green-500 text-2xl">Pal</span>
                <span className="text-green-500 font-bold text-2xl">/&gt;</span>
            </div>
            <div className="bg-slate-800 text-white">
                Created with ❤️ by Maharshi
            </div>
        </div>
    );
};
export default Footer;