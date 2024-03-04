"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";

interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

//   access the calculate Rent
const carRent=calculateCarRent(city_mpg,year);
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
                <div className="flex flex-col items-center justify-center gap-2">
                    <Image src="/steering-wheel.svg" width={20} height={20}
                    alt="steering wheel icon"/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CarCard;
