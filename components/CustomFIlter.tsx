'use client'
import React,{useState,Fragment} from 'react'
import Image from 'next/image';
import {useRouter} from 'next/navigation'
import {Listbox,Transition} from '@headlessui/react';
import { CustomFilterProps } from '@/types';


const CustomFIlter = ({title,options}:CustomFilterProps)=>{
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
          className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image src="/chevron-up-down.svg"
            width={20} height={20} alt='up-down svg'
            className='ml-4 object-contain'/>
          </Listbox.Button>
          {/* add transtitons here */}
          <Transition as={Fragment}
          leave="transition ease-in duration-300"
          leaveFrom="opactity-100"
          leaveTo="opacity-0">

            {/* add listbox options here */}
            <Listbox.Options
            className="custom-filter__options">
              {options.map((option)=>(
                <Listbox.Option key={option.title} value={option}
                className={({active})=>`relative cursor-default select-none py-2 px-4
                ${active ? 'bg-primary-blue text-white': 'text-pink-900'}
                `}>
                  {({selected})=>(
                    <span className={`block truncate
                    ${selected? 'font-medium':'font-normal'}
                    `}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFIlter