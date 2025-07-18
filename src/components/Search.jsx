import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div>
        <div className='search'>
            <div className='search-icon'>
                <img src='/search.svg' alt="Search" className='search-icon-img mt-10'/>
            </div>
            <input 
                type="text" 
                placeholder='Search for a movie' 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className='search-input'
            />
        </div>
    </div>
  )
}

export default Search