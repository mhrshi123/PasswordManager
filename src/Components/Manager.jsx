import React from "react";

import { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const showPassword = () => {
    // alert("show the password");
    if (ref.current.src.includes("Icons/eye.png") ){
      ref.current.src = "Icons/eye-cross.webp";
    }else{
      ref.current.src = "Icons/eye.png";
    }
  };

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      <div className="myContainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-700 font-bold">&lt;</span>
          <span className="text-white">Pass</span>

          <span className="text-green-700">Pal</span>
          <span className="text-green-700 font-bold">/&gt;</span>
        </h1>
        <p className="text-green-700 text-lg text-center">
          your own password manager
        </p>
        <div className="text-white flex flex-col p-4 gap-3 items-center">
          <input
            placeholder="Enter website url"
            className="rounded-full border border-green-500 w-full text-black p-4 py-1"
            type="text"
          />
          <div className="flex w-full gap-8 justify-between">
            <input
              placeholder="Enter username"
              className="rounded-full border border-green-500 w-full text-black p-4 py-1"
              type="text"
              name=""
              id=""
            />

            <div className="relative">
              <input
                placeholder="Enter password"
                type="text"
                className="rounded-full border border-green-500  text-black p-4 py-1"
                name=""
                id=""
              />
              <span className="absolute right-0 text-black px-4 text-center py-1 bottom-0 top-0 " onClick={showPassword}>
                <img
                  ref={ref}
                  src="Icons/eye.png"
                  className="cursor-pointer"
                  width={28}
                  alt="eye"
                  
                />
              </span>
            </div>
          </div>

          <button className="flex justify-center gap-2 items-center text-black bg-green-600 hover:bg-green-500 px-6 py-2 w-fit text-center mx-auto rounded-full ">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
      </div>
    </>
  );
};

export default Manager;
