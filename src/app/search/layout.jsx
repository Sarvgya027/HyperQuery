import SearchHeader from '@/components/SearchHeader'
import React from 'react'
import "../../app/globals.css"

function layout({children}) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  )
}

export default layout
