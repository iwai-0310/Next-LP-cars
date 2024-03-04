'use client';
import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({title,containerStyles,handleClick,textStyles,rightIcon,btnType}: CustomButtonProps) => {
  return (
    //add a button layout with props
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        {/* add button title here */}
        <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative h-6 w-6'>
          <Image src={rightIcon} alt="right-icons" fill
          className='object-contain'/>
        </div>
      )}
    </button>
    
  )
}

export default CustomButton