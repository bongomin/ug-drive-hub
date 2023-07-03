import { carProps } from "@/types";
import dynamic from "next/dynamic";

// fetch all cars from rapid api
export async function  fetchAllCars() {
    const headers = {
        'X-RapidAPI-Key': 'a5f37a32aemsh8e29c0757128c37p116d2ajsn94fe6f31a139',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera', {headers})

    const results = await response.json();
    return results;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    // Base rental price per day in dollars
    const basePricePerDay = 50;
    const mileageFactor = 0.1; // additional rate per mileage driven
    const ageFactor = 0.05; // additional rate per year vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

// Rental Calulation in Ugandan shillings
// export const calculateCarRent = (city_mpg: number, year: number) => {
//     // Base rental price per day in Ugandan Shillings
//     const basePricePerDayUGX = 100000;
//     const mileageFactorUGX = 5000; // additional rate per kilometer driven
//     const ageFactorUGX = 20000; // additional rate per year vehicle age

//     // Calculate additional rate based on mileage and age
//     const mileageRateUGX = city_mpg * mileageFactorUGX;
//     const ageRateUGX = (new Date().getFullYear() - year) * ageFactorUGX;

//     // Calculate total rental per day in Ugandan Shillings
//     const rentalRatePerDayUGX = basePricePerDayUGX + mileageRateUGX + ageRateUGX;

//     return rentalRatePerDayUGX.toFixed(0);
// };

export const generateCarImageUrl = (car: carProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getimage');

    const { make, year, model } = car;
    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullScreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);
    return `${url}`;
}
