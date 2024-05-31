'use client'

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TiMicrophone } from "react-icons/ti";

function HomeSearch() {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();


  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
    // setInput("");
  };
  const randomSearch = async (e) => {
    setRandomSearchLoading(true)
    const res = await fetch('https://random-word-api.herokuapp.com/word')
    const data = await res.json()
    if(!data) return;
    router.push(`search/web?searchTerm=${data[0]}`) 
    setRandomSearchLoading(false)
    
  }
  
  return (
    <>
      <div className="w-full sm:w-[50%] relative">
        <div className="absolute -top-5 -inset-0 bg-gradient-to-r from-[#14a6ab] to-[#947d37] rounded-full blur-[100px] opacity-50"></div>
        <form onSubmit={handleSubmit} className="flex w-full mx-auto max-w-[90%] border border-gray-200 px-4 py-2 sm:px-5 sm:py-3 rounded-xl hover:shadow-gray-400 focus-within:shadow-md transition-shadow relative z-10">
          <CiSearch className="text-[#CBE4DE] w-6 h-6 sm:w-8 sm:h-6 mr-2 sm:mr-3" />
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="bg-transparent text-white flex-grow focus:outline-none text-sm sm:text-base"
            placeholder="Search or type a URL"
          />
          <TiMicrophone className="text-[#CBE4DE] w-6 h-6 sm:w-8 sm:h-6 mr-1 sm:mr-2" />
        </form>
        <div className="flex flex-col space-y-2 mt-4 sm:space-y-0 justify-center sm:flex-row items-center gap-2">
          {/* <button className="bg-[#CBE4DE] rounded-md text-gray-800 text-sm hover:ring-green-600 focus:outline-none active:ring-gray-300 hover:shadow-lg w-36 h-10 transition-shadow"
          onClick={handleSubmit}
          >
            Query Search
          </button> */}
          <button
            onClick={randomSearch}
            disabled={randomSearchLoading}
            className={`z-10 rounded-md text-gray-800 text-sm focus:outline-none w-36 h-10 transition-shadow ${
              randomSearchLoading
                ? "bg-gray-300 opacity-80 cursor-not-allowed"
                : "bg-[#b1c7c2] hover:ring-gray-200 active:ring-gray-300 hover:shadow-lg"
            }`}
          >
            {randomSearchLoading ? "Loading..." : "Random Search"}  
          </button>
        </div>
      </div>
    </>
  );
}

export default HomeSearch;
