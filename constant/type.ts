import type { StaticImageData } from 'next/image';

export type restaurantType={
    id:number;
    name:string;
    logo:string;
    image:string;
    address:string;
    worktime:string;
    pay:string;
    star:number;
    rate:number;
    basketminimum:string;
    delivery:{
        icon:string;
        type:string;
        price:number;
    }
    otherCats:string[];
    catId:number[];
}

export type DownloadAppButtonProps={
    src:StaticImageData;
     alt:string;
     href?:string;
}