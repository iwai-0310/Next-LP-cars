export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "02d88feb0amshda279a27b4d160ap15905ejsn4d80de94d00f",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
