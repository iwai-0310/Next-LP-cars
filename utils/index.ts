const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
  params: {model: 'corolla'},
  headers: {
    'X-RapidAPI-Key': '02d88feb0amshda279a27b4d160ap15905ejsn4d80de94d00f',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}