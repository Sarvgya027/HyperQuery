// import React from 'react'
// import CountryLookup from './CountryLookup'

// function Footer() {
//   return (
//     <footer className='absolute bottom-0 text-sm text-gray-300 bg-transparent'>
//       <div className=''>
//         <CountryLookup />
//       </div>
//       <div className='flex border-2 flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-2 sm:space-y-0 '>
//         <ul className='flex items-center space-x-6 '>
//           <li className='hover:underline cursor-pointer'>About</li>
//           <li className='hover:underline cursor-pointer'>Advertising</li>
//           <li className='hover:underline cursor-pointer'>Business</li>
//           {/* <li className='hover:underline cursor-pointer'>How Search Works</li> */}
//         </ul>
        
//         <ul className='flex items-center space-x-6 '>
//           <li className='hover:underline cursor-pointer'>Privacy</li>
//           <li className='hover:underline cursor-pointer'>Terms</li>
//           <li className='hover:underline cursor-pointer'>Settings</li>

//         </ul>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from 'react'
import CountryLookup from './CountryLookup'

function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 right-0 bg-[#2C3333] flex flex-col'>
      <div className='border-b border-gray-700 px-4 py-2'>
        <CountryLookup />
      </div>
      <div className='flex text-gray-400 flex-col sm:flex-row justify-between  items-center px-4 py-1 text-xs space-y-2 sm:space-y-0'>
        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>About</li>
          <li className='hover:underline cursor-pointer'>Advertising</li>
          <li className='hover:underline cursor-pointer'>Business</li>
        </ul>

        <ul className='flex items-center space-x-6'>
          <li className='hover:underline cursor-pointer'>Privacy</li>
          <li className='hover:underline cursor-pointer'>Terms</li>
          <li className='hover:underline cursor-pointer'>Settings</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer