import { manufacturers } from './../components/constants/index';
import { MouseEventHandler } from "react";

export interface customButtonProps {
    title:string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit"
}

export interface searchManufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer:string) => void;
}