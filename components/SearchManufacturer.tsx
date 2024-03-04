'use client'
import React,{useState} from 'react';
import Image from 'next/image'
import { Combobox,Transition } from '@headlessui/react';
import { SearchManufacturerProps } from '@/types'; 

const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  return (
    <div className="search-manufacture">
        {/* add combobox here */}
        <Combobox>
            <div className="relative w-full"> 
            <Combobox.Button className="absolute top-[14px]">
                {/* add logo image here */}
                <Image src='/car-logo.svg' width={20} height={20} className='ml-4'
                alt='car-logo iamge'/>
            </Combobox.Button>
            {/* next to the button add combobox input */}
            <Combobox.Input className='serach-manufacturer__input'
            placeholder='volkswagen' displayValue={(manufacture:string)=>
            manufacture}
            onChange={}
            />

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer