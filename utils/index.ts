import { CarProps, FilterProps } from "@/types";
import { createClient } from "pexels";

export async function fetchCars(filters: FilterProps) {
  const headers = {
    "X-RapidAPI-Key": "02d88feb0amshda279a27b4d160ap15905ejsn4d80de94d00f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const { manufacturer, model,year,limit,fuel } = filters;
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
// add function to caluclateRent
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

//connect with api for car iamges and fetch that data
// export const generateCarImageUrl=()=>{
//   // key--> qLcO6QNc17mzCdk77UHDg1F97dTUoFXfF50EgvDOvEZNRAFEUpGpeMqV
//   const APIKey="qLcO6QNc17mzCdk77UHDg1F97dTUoFXfF50EgvDOvEZNRAFEUpGpeMqV";
//   // endpoint --> https://api.pexels.com/v1/
//   const client=createClient(APIKey);

//   const query="porsche 911 carrera 4/2";
//   client.photos.search({query, per_page: 1}).then(pic =>
//     {
//       const smallImageUrl = pic.photos[0]?.src?.small;
//     });
// }

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");

  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
// function to update parameters
export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathname;
};
