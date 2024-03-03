'use client';
import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({title,containerStyles,handleClick,btnType}: CustomButtonProps) => {
  return (
    //add a button layout with props
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        {/* add button title here */}
        <span className={`flex-1`}>{title}</span>

    </button>
    
  )
}

export default CustomButton