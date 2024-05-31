"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { AiFillCamera, AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

function SearchHeaderOptions() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchterm = searchParams.get("searchTerm");
  const pathname = usePathname();
  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}/?searchTerm=${searchterm}`
    );
  };

  return (
    <div className="flex spac-x-2 select-none gap-4 border-gray-700  border-b-[0.25px] w-full justify-center lg:justify-start lg:pl-52 text-gray-400 text-sm">
      <div onClick={() => selectTab("All")} className={`flex items-center space-x-1 border-b-4 border border-transparent active:text-[#0E8388] cursor-pointer pb-1 px-2 ${pathname === "/search/web" ? "!text-[#16c5cb] !border-b-[#16c5cb]" : ""}`}>
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div onClick={() => selectTab("Images")} className={`flex items-center space-x-1 border-b-4 border border-transparent active:text-[#0E8388] cursor-pointer pb-1 px-2 ${pathname === "/search/image" ? "!text-[#16c5cb] !border-b-[#16c5cb]" : ""}`}>
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}

export default SearchHeaderOptions;
