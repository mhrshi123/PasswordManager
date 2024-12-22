import React, { useEffect } from "react";
import { useState } from "react";

import { useRef } from "react";

const Manager = () => {
  const ref = useRef();

  const [form, setForm] = useState({ site: "", username: "", password: "" });

  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {

    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }// else {
    //   JSON.stringify([]);
    // }

  }, []);

  const showPassword = () => {

    if (ref.current.src.includes("Icons/eye.png")) {
      ref.current.src = "Icons/eye-cross.png";



    } else {
      ref.current.src = "Icons/eye.png";


    }
  };

  const savePassword = () => {

    setPasswordArray([...passwordArray, form]);

    localStrorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log(...passwordArray, form);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

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
            value={form.site}
            onChange={handleChange}
            name="site"
            placeholder="Enter website url"
            className="rounded-full border border-green-500 w-full text-black p-4 py-1"
            type="text"
          />
          <div className="flex w-full gap-8 justify-between">
            <input
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="rounded-full border border-green-500 w-full text-black p-4 py-1"
              type="text"
              name="username"
              id=""
            />

            <div className="relative">
              <input
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                type="text"
                className="rounded-full border border-green-500  text-black p-4 py-1"
                name="password"
                id=""
              />
              <span className="absolute right-0 text-black px-4 text-center bottom-0 top-0" onClick={showPassword}>
                <img
                  ref={ref}
                  src="Icons/eye.png"
                  className="cursor-pointer"

                  alt="eye"
                  style={{ width: "32px", height: "32px" }}
                />
              </span>
            </div>
          </div>

          <button onClick={savePassword} className="flex justify-center gap-2 items-center text-black bg-green-600 hover:bg-green-500 px-6 py-2 w-fit text-center mx-auto rounded-full ">
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>

        <div className="passwords">
          <h2 className="font-bold text-2xl py-4 text-white text-center">Your Passwords</h2>
          {passwordArray.length == 0 && <div className="text-white text-center">No Passwords to show</div>}
          {passwordArray.length != 0 &&
            <table className="table-auto w-full overflow-hidden rounded-md ">
              <thead className="text-white  bg-green-800">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">

                {passwordArray.map((item, index) => {
                  return <tr key={index}>
                    <td className="text-center py-2 border border-white w-32" >{item.site}</td >
                    <td className="text-center py-2 border border-white w-32">{item.username}</td >
                    <td className="text-center py-2 border border-white w-32">{item.password}</td >
                  </tr>
                })}



              </tbody>
            </table>
          }
        </div>
      </div>
    </>
  );
};

export default Manager;
