
const input = document.getElementById("cityName");
let city = ""

input.addEventListener("change", updateValue)
function updateValue(e) {
    city = e.srcElement.value;
    getInfo();
  }

const getInfo = async () => {
    res = await axios(`http://api.weatherapi.com/v1/current.json?key=d953e901689840feb78135231222603 &q=${city} &lang=es`);
    console.log(res)
    document.getElementById("info").setAttribute("style", "display:block;")
    document.getElementById("city").innerHTML = res.data.location.name + ", " + res.data.location.country   
    document.getElementById("temp").innerHTML = res.data.current.feelslike_c + "º"
    document.getElementById("condition").innerHTML = res.data.current.condition.text
    document.getElementById("icon").setAttribute("src", res.data.current.condition.icon)      
    document.getElementById("time").innerHTML = "Hora Local: " + res.data.location.localtime.substring(11,16)
    document.getElementById("favicon").setAttribute("href", res.data.current.condition.icon)
    
}

