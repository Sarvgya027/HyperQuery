import { Nunito } from "next/font/google";
import Link from "next/link";
import React from "react";

import { CgMenuGridO } from "react-icons/cg";

const nunito = Nunito({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

function HomeHeader() {
  return (
    <header className={nunito.className}>
      <div className="flex text-sm justify-end mr-5 gap-3 mt-2 p-2">
        <Link
          className="flex justify-center items-center hover:bg-[rgb(20,155,160)] text-white text-xs px-4 border-b-[1px] border-[#18b9be] hover:border-[#23bdc2] rounded-s-2xl transition duration-400 delay-10 ease-in-out "
          href={"https://mail.google.com"}
        >
          Gmail
        </Link>

        <Link
          className="flex justify-center items-center hover:bg-[#149ba0] text-white text-xs py-1 px-2 border-b-[1px] border-[#18b9be] hover:border-[#23bdc2] rounded-r-2xl transition duration-400 delay-10 ease-in-out"
          href={"https://image.google.com"}
        >
          Images
        </Link>

        <CgMenuGridO className="flex justify-center items-center relative top-1 text-[#CBE4DE] text-[28px] hover:bg-gray-600 rounded-full transition duration-400 delay-10 ease-in-out " />

        <button className="bg-transparent hover:bg-[#149ba0] text-white  hover:text-white py-2 px-4 border border-[#149ba0] hover:border-transparent rounded-full text-xs transition duration-400 delay-10 ease-in-out ">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default HomeHeader;
