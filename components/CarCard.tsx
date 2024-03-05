"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import { CarDetails } from ".";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

//   access the calculate Rent
const carRent=calculateCarRent(city_mpg,year);

//add state to handle modal state open or not
const [isOpen,setIsOpen]=useState(false);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        {/* add heading for card name and model */}
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
        <p className="flex mt-6 text-[32px]">
            <span className="self-start text-[14px] font-semibold">
                $
            </span>
            {carRent}
            <span className="self-end text-[14px] font-medium">
                /day
            </span>
            
        </p>
        {/* add the image element here */}
        <div className="relative w-full h-40 my-3 object-contain">
            <Image src="/hero.png"  alt="car-image"
            fill priority
            className="object-contain"/>
        </div>

        {/* add milegage and other details here */}
        <div className="relative flex w-full mt-2">
            <div className="flex group-hover:invisible w-full justify-between
            text-gray">
                {/* add logo of stering and transimiison here */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image src="/steering-wheel.svg" width={20} height={20}
                    alt="steering wheel icon"/>
                    <p className="text-[14px]">
                        {transmission==='a'?'Automatic':"Manual"}
                    </p>
                </div>
                {/* add tire logo and distane covered here */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image src="/tire.svg" width={20} height={20}
                    alt="tire icon"/>
                    <p className="text-[14px]">
                        {drive.toUpperCase()}
                    </p>
                </div>
                {/* add fuel logo and mileage details */}
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image src="/gas.svg" width={20} height={20}
                    alt="fuel icon"/>
                    <p className="text-[14px]">
                        {city_mpg} KM/L
                    </p>
                </div>
            </div>

            {/* add button here */}
            <div className="car-card__btn-container">
                <CustomButton
                title="view More"
                containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                textStyles="text-whtie text-[14px] leading-[17px] font-bold"
                rightIcon="/right-arrow.svg"
                handleClick={()=>setIsOpen(true)}/>
            </div>
        </div>

        {/* car details comp here */}
        <CarDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)}
        car={car}/>
    </div>
  );
};

export default CarCard;
