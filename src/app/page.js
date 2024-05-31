import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col justify-center items-center mt-20">
        <Image alt="logo" src="/Logo.png" className="mb-8" style={{width: "auto"}} width={250} height={250} priority={true} />
        {/* homesearch */}
        <HomeSearch />
      </div>
    </>
  );
}

export default Home;
