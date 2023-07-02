"use client";
import React from 'react';
import Image from "next/image";
import { customButtonProps } from '@/types';

function customButton({title,handleClick,containerStyles}:customButtonProps) {
  return (
    <button
    disabled= {false}
    type={'button'}
    className={`custom-btnbn ${containerStyles}`}
    onClick={() => {handleClick}}
    
    >s
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default customButton