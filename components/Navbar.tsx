import React from 'react';
import Link from "next/link";
import Image from "next/image";

import customButton from './CustomButton';
import CustomButton from './CustomButton';



function Navbar() {
  return (
    <header className='w-full absolute z-10'>
        <nav 
        className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'
        >
            <Link href="/" className='flex justify-center items-center'>
                <Image
                 src="/logo.svg"
                 alt='UG Drive Hub Logo'
                 width={118}
                 height={18}
                 className='object-contain'
                 ></Image>
            </Link>
            <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] px-2 py-2"
            />
        </nav>

    </header>
  )
}

export default Navbar