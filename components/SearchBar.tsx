'use client'
import React,{useState} from 'react'
import {useRouter} from 'next/navigation';
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

    const router=useRouter();
    // create function -handleSearch
    const handleSearch=(e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();

      if(manufacturer=== '' && model === ''){
        return alert ('please fill the search bar');
      }
      //call update search params here
      updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase());

    }
    //function that updates the searched query
    const updateSearchParams=(model:string, manufacturer:string)=>{
      const searchParams=new URLSearchParams(window.location.search);
      if(model){
        searchParams.set('model',model);
      }else{
        searchParams.delete('model');
      }
      if(manufacturer){
      searchParams.set('manufacturer',manufacturer);
      }else{
        searchParams.delete('manufacturer');
      }

      const newPathname=`${window.location.pathname}?${
        searchParams.toString()}`;
        router.push(newPathname , {scroll: false});
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
              <SearchButton otherClasses='sm:hidden'/>
            </div>
            <SearchButton otherClasses='max-xm:hidden'/>
    </form>
  )
}

export default SearchBar