import Link from "next/link";

export default async function WebSearchPage({searchParams}) {
  try {
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
    );
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    const results = data.items;

    if(!results) {
      return(
        <div className='flex flex-col justify-center items-center gap-y-10 pt-10'>
        <h1 className='text-3xl mb-4 text-[#CBE4DE]'>No results found for "{searchParams.searchTerm}"</h1>
        <p className='text-[#CBE4DE]'>Please Try again...</p>
        <Link href='/' className='text-[#16C3C8]'>Home</Link>
      </div>
      )
    }
    return (
      <div>
        {results && results.length > 0 ? (
          results.map((result, index) => (
            <div key={index}>
              <h1>{result.title}</h1>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <div>Error loading data</div>;
  }
}
