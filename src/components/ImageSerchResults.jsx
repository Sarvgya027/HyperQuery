import Link from 'next/link'
import React from 'react'

function ImageSerchResults({results}) {
  return (
    <div className='pb-10 mt-2'>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-2 space-x-2 '>
        {results.items.map((result) => (
          <div className='mb-2' key={result.link}>
            <div className='group'>
              <Link href={result.image.contextLink}>
                <img src={result.link} alt={result.title} className='h-[200px] group-hover:shadow-xl w-full object-contain transition-shadow duration-300' />
              </Link>
              <Link href={result.image.contextLink}>
                <h2 className='group-hover:underline text-[#CBE4DE] truncate text-md'>{result.title}</h2>
              </Link>
              <Link href={result.image.contextLink}>
              <p className='group-hover:underline text-[#CBE4DE]  truncate text-xs'>{result.displayLink}</p>
              </Link>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSerchResults

// import Link from 'next/link'
// import React from 'react'

// function ImageSearchResults({ results }) {
//   return (
//     <div className='pb-14 mt-2'>
//       <div className='flex flex-wrap justify-between px-2'>
//         {results.items.map((result) => (
//           <div className='w-[19%] mb-2 p-1' key={result.link}>
//             <div className='group'>
//               <Link href={result.image.contextLink}>
//                 <img
//                   src={result.link}
//                   alt={result.title}
//                   className='h-[200px] group-hover:shadow-xl w-full object-contain transition-shadow duration-300'
//                 />
//               </Link>
//               <Link href={result.image.contextLink}>
//                 <h2 className='group-hover:underline text-[#CBE4DE] truncate text-md'>{result.title}</h2>
//               </Link>
//               <Link href={result.image.contextLink}>
//                 <p className='group-hover:underline text-[#CBE4DE] truncate text-xs'>{result.displayLink}</p>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ImageSearchResults;
