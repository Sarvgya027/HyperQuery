import Link from 'next/link'
import React from 'react'

import { CgMenuGridO } from "react-icons/cg";

function HomeHeader() {
  return (
    <header>
      <div className='flex justify-end mr-5 gap-3 p-2'>
        <Link className='bg-[#0E8388] hover:bg-[rgb(20,155,160)] text-white font-bold text-sm py-1 px-4 border-b-2 border-[#18b9be] hover:border-[#23bdc2] rounded-s-2xl' href={"https://mail.google.com"}>Gmail</Link>

        <Link className='bg-[#0E8388] hover:bg-[#149ba0] text-white font-bold text-sm py-1 px-2 border-b-2 border-[#18b9be] hover:border-[#23bdc2] rounded-r-2xl' href={"https://image.google.com"}>Images</Link>

        <CgMenuGridO className='text-[#fff] text-[28px] hover:bg-gray-600 rounded-full ' />

        <button className='bg-[#0E8388] hover:bg-[#149ba0] text-white font-bold text-sm py-1 px-4 border-b-2 border-[#18b9be] hover:border-[#23bdc2] rounded-2xl'>Sign In</button>
        
      </div>
    </header>
  )
}

export default HomeHeader

