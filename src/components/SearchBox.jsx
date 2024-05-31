'use client'

import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { BsFillMicFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter, useSearchParams } from 'next/navigation'


function SearchBox() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get('searchTerm')
  const [term, setTerm] = useState(searchTerm || '')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`)
  }

  return (
    <div className="relative">
      <div className="absolute inset-1 bg-gray-600 bg-gradient-to-r from-[#14a6ab] to-[#947d37] blur-[80px] opacity-100 rounded-md z-0"></div>
      <form onSubmit={handleSubmit} className="flex border border-gray-300 rounded-xl shadow-lg px-4 py-1 ml-10 mr-5 flex-grow max-w-3xl items-center z-10 hover:shadow-gray-400 focus-within:shadow-md transition-shadow">
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="z-10 bg-transparent text-[#CBE4DE] rounded-md w-full focus:outline-none 
          "
        />
        <RxCross2 onClick={() => setTerm('')} className="text-2xl text-gray-300 cursor-pointer sm:mr-2 z-10" />
        <BsFillMicFill className="hidden sm:inline-flex text-4xl text-[#CBE4DE] border-l-2 border-gray-300 mr-3 pl-4 z-10" />
        <AiOutlineSearch className="text-2xl hidden sm:inline-flex text-[#CBE4DE] cursor-pointer z-10"
        onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default SearchBox


