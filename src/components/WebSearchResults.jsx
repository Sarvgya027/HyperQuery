import Link from "next/link";
import React from "react";
import Parser from 'html-react-parser';

function WebSearchResults({ results }) {
  return <div className="w-full mx-auto px-3 pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
    <p className="text-gray-300 text-sm mb-2 mt-2">
      About {results.searchInformation.formattedTotalResults} results (
      {results.searchInformation.formattedSearchTime} seconds)
    </p>
    {results.items?.map((result) => (
      <div className="mb-8 max-w-xl text-[#CBE4DE]" key={result.link}>
        <div className="group flex flex-col">
          <Link className="text-sm" href={result.link}>
            {result.formattedUrl}
          </Link>
          <Link href={result.link} className="group-hover:underline decoration-[#16C3C8] text-lg truncate font-medium text-[#99C3E2] ">
            {result.title}
          </Link>
        </div>
        <p className="text-[#CCCCCC] text-xs">{Parser(result.htmlSnippet)}</p>

      </div>
    ))}
    
  </div>; 
}

export default WebSearchResults;
