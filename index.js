
const input = document.getElementById("cityName");
const weekday = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
const weekdayFull = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let city = "Montevideo";

const getInfo = async () => {
    try {
        current = await axios(`http://api.weatherapi.com/v1/current.json?key=d953e901689840feb78135231222603 &q=${city} &lang=en`)
        forecast = await axios(`http://api.weatherapi.com/v1/forecast.json?key=d953e901689840feb78135231222603&q=${city}&days=3 &lang=en`)         
        console.log(current)
        document.getElementById("mError").setAttribute("style", "display: none") 

        document.getElementById("city").innerHTML = current.data.location.name + ", " + current.data.location.country   
        document.getElementById("temp").innerHTML = current.data.current.feelslike_c + "º"
        document.getElementById("condition").innerHTML = current.data.current.condition.text
        document.getElementById("icon").setAttribute("src", current.data.current.condition.icon) 
        let fechaActual = new Date(current.data.location.localtime)        
        document.getElementById("time").innerHTML = weekdayFull[fechaActual.getDay()] + ", " + current.data.location.localtime.substring(8,11) + month[fechaActual.getMonth()]
        document.getElementById("favicon").setAttribute("href", current.data.current.condition.icon)    
        document.getElementById("wind").innerHTML = current.data.current.wind_kph + " km/h"
        document.getElementById("pressure").innerHTML = current.data.current.pressure_mb + " mbar"
        document.getElementById("uv").innerHTML = current.data.current.uv
        document.getElementById("humidity").innerHTML = current.data.current.humidity

        document.getElementById("temp1").innerHTML = forecast.data.forecast.forecastday[1].day.avgtemp_c + "º"
        document.getElementById("icon1").setAttribute("src", forecast.data.forecast.forecastday[1].day.condition.icon)  
        let fecha1 = new Date(forecast.data.forecast.forecastday[1].date)    
        document.getElementById("day1").innerHTML = weekday[fecha1.getDay()] + " " + fecha1.getDate()

        document.getElementById("temp2").innerHTML = forecast.data.forecast.forecastday[2].day.avgtemp_c + "º"
        document.getElementById("icon2").setAttribute("src", forecast.data.forecast.forecastday[2].day.condition.icon)  
        let fecha2 = new Date(forecast.data.forecast.forecastday[2].date)    
        document.getElementById("day2").innerHTML = weekday[fecha2.getDay()] + " " +  fecha2.getDate()        
    } 
    catch (error) {        
        input.setAttribute("style", "outline-color: #FF8585")
        input.setCustomValidity("Invalid field.")
        input.classList.toggle("error")
        document.getElementById("mError").setAttribute("style", "display: block") 
    }         
}

getInfo();

input.addEventListener("change", updateValue)
function updateValue(e) {
    city = e.srcElement.value;
    input.setAttribute("style", "outline-color: transparent")
    getInfo();
}





    