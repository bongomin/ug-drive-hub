'use client';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import { carProps } from '@/types';

interface carCardProps {
    car: carProps
}

function CarCard({ car } : carCardProps) {
    const { city_mpg, year, make, model, transmission, drive } = car
    return (
        <div className='car_card group'>
            <div className="car-card__content">
                <h2 className='car-card__content-title'>
                    {make} {model}
                    </h2>
            </div>
            <p>
                <span>
                    Car Rent....
                </span>
            </p>
        </div>
    )
}

export default CarCard