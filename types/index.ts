import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
}

export interface searchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}

export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: 4;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: 31;
    make: string;
    model: string;
    transmission: string;
    year: number;
}