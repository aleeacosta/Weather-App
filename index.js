
const input = document.getElementById("cityName");
const weekday = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
let city = "Barcelona";

const getInfo = async () => {
    try {
        current = await axios(`http://api.weatherapi.com/v1/current.json?key=d953e901689840feb78135231222603 &q=${city} &lang=en`)
        forecast = await axios(`http://api.weatherapi.com/v1/forecast.json?key=d953e901689840feb78135231222603&q=${city}&days=3 &lang=en`)         
        
        document.getElementById("mError").setAttribute("style", "display: none") 

        document.getElementById("city").innerHTML = current.data.location.name + ", " + current.data.location.country   
        document.getElementById("temp").innerHTML = current.data.current.feelslike_c + "º"
        document.getElementById("condition").innerHTML = current.data.current.condition.text
        document.getElementById("icon").setAttribute("src", current.data.current.condition.icon)      
        document.getElementById("time").innerHTML = "Local Hour: " + current.data.location.localtime.substring(11,16)
        document.getElementById("favicon").setAttribute("href", current.data.current.condition.icon)    
        
        document.getElementById("temp1").innerHTML = forecast.data.forecast.forecastday[1].day.avgtemp_c + "º"
        document.getElementById("icon1").setAttribute("src", forecast.data.forecast.forecastday[1].day.condition.icon)  
        let fecha1 = new Date(forecast.data.forecast.forecastday[1].date)    
        document.getElementById("day1").innerHTML = weekday[fecha1.getDay()] + " " + fecha1.getDate()

        document.getElementById("temp2").innerHTML = forecast.data.forecast.forecastday[2].day.avgtemp_c + "º"
        document.getElementById("icon2").setAttribute("src", forecast.data.forecast.forecastday[2].day.condition.icon)  
        let fecha2 = new Date(forecast.data.forecast.forecastday[2].date)    
        document.getElementById("day2").innerHTML = weekday[fecha2.getDay()] + " " + fecha2.getDate()        
    } 
    catch (error) {        
        input.setAttribute("style", "outline-color: #FF8585")
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





    