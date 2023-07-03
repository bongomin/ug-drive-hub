"use client";
import React from 'react';
import Image from "next/image";
import { customButtonProps } from '@/types';

function CustomButton({ title, handleClick, containerStyles, btnType, textStyles, rightIcon }: customButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt='right icon'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
}

export default CustomButton;
