// import Link from "next/link";
// import Error from "../error";
// // import WebSearchResults from "@/components/WebSearchResults";
// import ImageSerchResults from "@/components/ImageSerchResults";

// export default async function ImageSearchPage({searchParams}) {
//   const startIndex = searchParams.start || 1;
//   try {
//     const response = await fetch(
//       `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
//     );
//     if (!response.ok) {
//       throw new Error('Something went wrong');
//     }
//     const data = await response.json();
//     const results = data.items;

//     if(!results) {
//       return(
//         <div className='flex flex-col justify-center items-center gap-y-10 pt-10'>
//         <h1 className='text-3xl mb-4 text-[#CBE4DE]'>No results found for "{searchParams.searchTerm}"</h1>
//         <p className='text-[#CBE4DE]'>Please Try again...</p>
//         <Link href='/' className='text-[#16C3C8]'>Home</Link>
//       </div>
//       )
//     }
//     return (
//       <div>
//         {results && <ImageSerchResults results={data} />}
//       </div>
//     );
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return <div>
//       <Error />
//     </div>;
//   }
// }

import Link from "next/link";
import Error from "../error";
import ImageSerchResults from "@/components/ImageSerchResults";


export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || 1;
  const searchTerm = searchParams.searchTerm;

  // Check for missing search term
  if (!searchTerm) {
    return (
      <div className='flex flex-col justify-center items-center gap-y-10 pt-10'>
        <h1 className='text-3xl mb-4 text-[#CBE4DE]'>No search term provided</h1>
        <p className='text-[#CBE4DE]'>Please provide a search term and try again.</p>
        <Link href='/' className='text-[#16C3C8]'>Home</Link>
      </div>
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&searchType=image&start=${startIndex}`
    );

    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    const data = await response.json();
    const results = data.items;

    if (!results) {
      return (
        <div className='flex flex-col justify-center items-center gap-y-10 pt-10'>
          <h1 className='text-3xl mb-4 text-[#CBE4DE]'>No results found for "{searchTerm}"</h1>
          <p className='text-[#CBE4DE]'>Please try again...</p>
          <Link href='/' className='text-[#16C3C8]'>Home</Link>
        </div>
      );
    }

    return (
      <div>
        {results && <ImageSerchResults results={data} />}
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <Error />
      </div>
    );
  }
}
