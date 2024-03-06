import { Hero, SearchBar, CustomFIlter,CarCard } from "@/components";
import Image from "next/image";
import { fetchCars } from "@/utils";
import { fuels, yearsOfProduction } from "@/constants";


export default async function Home({searchParams}) {
  // get all cars data from the server
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  // console.log(allCars);
  // check if the data is empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;


  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-widht" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Cataloge</h1>
          <p>Explore the cars you might like</p>
        </div>
        {/* filters starts here */}
        <div className="home__filters">
          <SearchBar />
          <div className="home_filter-container">
            <CustomFIlter title="fuel" options={fuels}/>
            <CustomFIlter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-blackk text-xl font-bold">Oops,no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
