const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a0e7f2f36msh0f27401f788dd38p1a7aefjsn0d9219f3141e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather= (city) =>{
	cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
    .then(Response => Response.json())
    .then(Response => {
		
		console.log(Response)
		cloud_pct.innerHTML=Response.cloud_pct
		temp.innerHTML=Response.temp 
		temp2.innerHTML=Response.temp 
		feels_like.innerHTML=Response.feels_like
		humidity.innerHTML=Response.humidity
		humidity2.innerHTML=Response.humidity
		min_temp .innerHTML=Response. min_temp
		max_temp .innerHTML=Response.max_temp
		wind_speed.innerHTML=Response.wind_speed
		wind_speed2.innerHTML=Response.wind_speed
		sunrise.innerHTML=Response.sunrise
		sunset.innerHTML=Response.sunset
	  
	  
	})
    .catch(err => console.error(err));
}
submit.addEventListener("click" , (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")