'use client';
import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({title,containerStyles,handleClick}: CustomButtonProps) => {
  return (
    //add a button layout with props
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
        {/* add button title here */}
        <span className={`flex-1`}>{title}</span>

    </button>
    
  )
}

export default CustomButton