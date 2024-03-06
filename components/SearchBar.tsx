'use client'
import React,{useState} from 'react'
import { SearchManufacturer } from './';
import Image from 'next/image';

const SearchButton=({otherClasses}:{otherClasses:string})=>(
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image src="/magnifying-glass.svg"
    alt="magnifing glass icon" width={40} height={40}
    className="object-contain"
    />
  </button>
)

const SearchBar = () => {

    //add state to handle manufacturer
    const [manufacturer,setManufacturer] =useState('');
    //add state to handle model
    const [model,setModel]=useState("");
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
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className='searchbar__item'>
              <Image src="/model-icon.png"
              width={25}
              height={25}
              className='absolute w-[20px] h-[20px] ml-4'
              alt="car model icon"/>
              <input type="text" 
              name="model"
              value={model}
              onChange={(e)=> setModel(e.target.value)}
              placeholder="Tiguan"
              className='searchbar__input'
              />
            </div>
    </form>
  )
}

export default SearchBar