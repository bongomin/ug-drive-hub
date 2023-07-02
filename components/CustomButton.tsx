"use client";
import React from 'react';
import Image from "next/image";
import { customButtonProps } from '@/types';

function customButton({title,handleClick,containerStyles,btnType}:customButtonProps) {
  return (
    <button
    disabled= {false}
    type={btnType || 'button'}
    className={`custom-btnbn ${containerStyles}`}
    onClick={() => {handleClick}}
    
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default customButton