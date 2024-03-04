'use client'
import React,{useState} from 'react'
import { SearchManufacturer } from './';

const SearchBar = () => {

    //add state to handle manufacturer
    const [manufacturer,setManufacturer] =useState('');
    // create function -handleSearch
    const handleSearch=()=>{

    }

  return (
    // add a form with search on submit
    <form className='searchbar' onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
                />
            </div>
    </form>
  )
}

export default SearchBar