import type { StaticImageData } from 'next/image';

export type DeliverType={
    icon:string;
    type:string;
    price:number;
}

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
    delivery: DeliverType;
    otherCats:string[];
    catId:number[];
}


export type FoodType={
    id:number;
    catId:number[];
    subCatId:number[];
    restId:number;
    rate:number;
    name:string;
    desc:string;
    image:string;
    price:number;
}



export type DownloadAppButtonProps={
    src:StaticImageData;
     alt:string;
     href?:string;
}