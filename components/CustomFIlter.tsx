'use client'
import React,{useState,Fragment} from 'react'
import Image from 'next/image';
import {useRouter} from 'next/navigation'
import {Listbox,Transition} from '@headlessui/react';
import { CustomFilterProps } from '@/types';


const CustomFIlter = ({title,options}:CustomFilterProps) => {
  //add state to handle selected value
  const [selected,setSelected]=useState(options[0]);
  return (
    <div className='w-fit'>
      <Listbox
      value={selected}
      onChange={(e)=> setSelected(e)}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button
          className="custom-filter__btn"
          >
            <span className='block truncate'>{selected.title}</span>
            <Image src="/chevron-up-down.svg"
            width={20} height={20} alt='up-down svg'/>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFIlter