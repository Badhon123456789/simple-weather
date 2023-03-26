const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "95ab97f185msh53b86c88ea77a2ap1a9b85jsnf0734986ed44",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const inputCity = document.getElementById("inputCity");
const buttonCity = document.getElementById("buttonCity");
const cityName = document.getElementById("cityName");

const getWeather = (city) => {
  cityName.innerText = city;
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
    .then((response) => response.json())
    .then((response) => {
      const humidity = document.getElementById("humidity");
      humidity.innerText = response.humidity;
      const maxTemp = document.getElementById("maxTemp");
      maxTemp.innerText = response.max_temp;
      const temperature = document.getElementById("temp");
      temperature.innerText = response.temp;
    })
    .catch((err) => console.error(err));
};

buttonCity.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(inputCity.value);
});

const cityName1 = document.getElementById("cityName1");
const cityName2 = document.getElementById("cityName2");
const cityName3 = document.getElementById("cityName3");

function getWeather1(city) {
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
    .then((response) => response.json())
    .then((data) => {
	  const tableData = document.getElementsByTagName("td");
	  for (let i = 0; i < tableData.length; i++) {
		tableData[0].innerText = data.cloud_pct ;
		tableData[1].innerText = data.feels_like ;
		tableData[2].innerText = data.humidity ;
		tableData[3].innerText = data.max_temp ;
		tableData[4].innerText = data.min_temp ;
		tableData[5].innerText = data.sunrise ;
		tableData[6].innerText = data.sunset ;
		tableData[7].innerText = data.temp ;
		tableData[8].innerText = data.wind_degrees ;
		tableData[9].innerText = data.wind_speed ;

	}
    })
    .catch((err) => console.error(err));

}
getWeather1(cityName1.innerText);
function getWeather2(city) {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
	  .then((response) => response.json())
	  .then((data) => {
		const tableData = document.getElementsByTagName("td");
		for (let i = 0; i < tableData.length; i++) {
		  tableData[10].innerText = data.cloud_pct ;
		  tableData[11].innerText = data.feels_like ;
		  tableData[12].innerText = data.humidity ;
		  tableData[13].innerText = data.max_temp ;
		  tableData[14].innerText = data.min_temp ;
		  tableData[15].innerText = data.sunrise ;
		  tableData[16].innerText = data.sunset ;
		  tableData[17].innerText = data.temp ;
		  tableData[18].innerText = data.wind_degrees ;
		  tableData[19].innerText = data.wind_speed ;
	  }
	  })
	  .catch((err) => console.error(err));
  
  }
getWeather2(cityName2.innerText);
function getWeather3(city) {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
	  .then((response) => response.json())
	  .then((data) => {
		const tableData = document.getElementsByTagName("td");
		for (let i = 0; i < tableData.length; i++) {
		  tableData[20].innerText = data.cloud_pct ;
		tableData[21].innerText = data.feels_like ;
		tableData[22].innerText = data.humidity ;
		tableData[23].innerText = data.max_temp ;
		tableData[24].innerText = data.min_temp ;
		tableData[25].innerText = data.sunrise ;
		tableData[26].innerText = data.sunset ;
		tableData[27].innerText = data.temp ;
		tableData[28].innerText = data.wind_degrees ;
		tableData[29].innerText = data.wind_speed ;
	  }
	  })
	  .catch((err) => console.error(err));
  
  }
getWeather3(cityName3.innerText);


