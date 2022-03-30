
const input = document.getElementById("cityName");
const weekday = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
let city = "Barcelona";

const getInfo = async () => {
    res = await axios(`http://api.weatherapi.com/v1/current.json?key=d953e901689840feb78135231222603 &q=${city} &lang=es`)
    res2 = await axios(`http://api.weatherapi.com/v1/forecast.json?key=d953e901689840feb78135231222603&q=${city}&days=3 &lang=es`)   
    // document.getElementById("info").setAttribute("style", "display:block;")
    // document.getElementById("container2").setAttribute("style", "display:grid;")  

    document.getElementById("city").innerHTML = res.data.location.name + ", " + res.data.location.country   
    document.getElementById("temp").innerHTML = res.data.current.feelslike_c + "º"
    document.getElementById("condition").innerHTML = res.data.current.condition.text
    document.getElementById("icon").setAttribute("src", res.data.current.condition.icon)      
    document.getElementById("time").innerHTML = "Hora Local: " + res.data.location.localtime.substring(11,16)
    document.getElementById("favicon").setAttribute("href", res.data.current.condition.icon)    
    
    document.getElementById("temp1").innerHTML = res2.data.forecast.forecastday[1].day.avgtemp_c + "º"
    document.getElementById("icon1").setAttribute("src", res2.data.forecast.forecastday[1].day.condition.icon)  
    let fecha1 = new Date(res2.data.forecast.forecastday[1].date)    
    document.getElementById("day1").innerHTML = weekday[fecha1.getDay()] + " " + fecha1.getDate()

    document.getElementById("temp2").innerHTML = res2.data.forecast.forecastday[2].day.avgtemp_c + "º"
    document.getElementById("icon2").setAttribute("src", res2.data.forecast.forecastday[2].day.condition.icon)  
    let fecha2 = new Date(res2.data.forecast.forecastday[2].date)    
    document.getElementById("day2").innerHTML = weekday[fecha2.getDay()] + " " + fecha2.getDate() 
    
}

getInfo();

input.addEventListener("change", updateValue)
function updateValue(e) {
    city = e.srcElement.value;
    getInfo();
}



    