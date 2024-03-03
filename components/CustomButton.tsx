'use client';
import React from 'react';
import Image from 'next/image';

const CustomButton = () => {
  return (
    //add a button layout with props
    <button
    disabled={false}
    type={"button"}
    className={`custom-btn`}
    onClick={()=>{}}
    >
        {/* add button title here */}
        <span className={`flex-1`}>title</span>

    </button>
    
  )
}

export default CustomButton