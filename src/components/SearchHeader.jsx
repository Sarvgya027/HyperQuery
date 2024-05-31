import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from './SearchBox'
import {RiSettings3Line} from 'react-icons/ri';
import {TbGridDots} from 'react-icons/tb'
import { Nunito } from "next/font/google";
import SearchHeaderOptions from './SearchHeaderOptions';

const nunito = Nunito({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
}); 

function SearchHeader() {
  return (
    <header className={`${nunito.className}  `}>
     <div className='m-2 flex p-4 items-center justify-between '>
      <Link href='/'>
      <Image alt="logo" src="/HeaderLogo.png" className="" width={180} height={150} priority={true} />
      </Link>
      <div className='flex-1'>
        <SearchBox />
      </div>
      <div className='hidden md:inline-flex space-x-2 mr-4 gap-3   '>
        <RiSettings3Line className='text-[#CBE4DE] text-md text-[28px] hover:bg-gray-600 rounded-full transition duration-400 delay-10 ease-in-out '/>
        <TbGridDots className='text-[#CBE4DE] text-md text-[28px] hover:bg-gray-600 rounded-full transition duration-400 delay-10 ease-in-out '/>

      </div>
        <button className=' bg-transparent hover:bg-[#149ba0] text-white  hover:text-white py-2 px-5 border border-[#149ba0] hover:border-transparent rounded-full text-xs transition duration-400 delay-10 ease-in-out'>Sign in</button>
     </div>
     <SearchHeaderOptions />
    </header>
  )
}

export default SearchHeader 

