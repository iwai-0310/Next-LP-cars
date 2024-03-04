'use client'
import React from 'react'
import { SearchManufacturer } from './'

const SearchBar = () => {
    // create function -handleSearch
    const handleSearch=()=>{

    }

  return (
    // add a form with search on submit
    <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer/>
            </div>
    </form>
  )
}

export default SearchBar