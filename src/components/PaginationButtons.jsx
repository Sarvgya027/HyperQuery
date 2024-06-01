'use client'

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function PaginationButtons() {

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;
  return (
    <div className='text-gray-400 flex px-8 pb-4 justify-between sm:justify-start sm:space-x-30 sm:px-0 gap-10 '>
      {
        startIndex >= 10 && (
          <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
            <div className='flex flex-col items-center text-sm hover:underline cursor-pointer'>
            <BsChevronLeft className='h-5' />
            <p>Previous</p>
            </div>
          </Link>
        )
      }
      {
        startIndex <= 90 && (
          <Link href={`${pathName}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
            <div className='flex flex-col items-center text-sm hover:underline cursor-pointer'>
            <BsChevronRight className='h-5' />
            <p>Next</p>
            </div>
          </Link>
        )
      }
      
    </div>
  )
}

export default PaginationButtons