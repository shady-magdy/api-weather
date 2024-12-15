let search = document.getElementById("search")
let error = document.getElementById("error")
let main = document.getElementById("main")
let icon1 = document.getElementById("icon1")
let icon2 = document.getElementById("icon2")
icon1.addEventListener("click", hamada)
icon1.addEventListener("click", searchh)
function searchh() {
    type = search.value
    getweyher(type)


}
async function getweyher(type = "germany") {
    let http = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${type}&appid=903d7547fd5c6ef09ee80966b355b553&units=metric`)
    let data = await http.json()
    displaydata(data)
    console.log(data);
    // if (type == undefined) {
    //     type = "germany"
    // }

}
getweyher()

function displaydata(responce) {
    if (responce.cod == 404&&search.value=="" ) {
        main.style.display = "none"

    } else {

        console.log(responce);
        document.getElementById("namecity").innerHTML = responce.name
        document.getElementById("humidity").innerHTML = responce.main.humidity + "%"
        document.getElementById("speed").innerHTML = responce.wind.speed + "km/h"
        document.getElementById("temp").innerHTML = responce.main.temp + `<sup>0</sup>c`
        if (responce.weather[0].main == "Clouds") {
            document.getElementById("weathericon").src = "images/clouds.png"
        } else if (responce.weather[0].main == "Clear") {
            document.getElementById("weathericon").src = "images/clear.png"
        } else if (responce.weather[0].main == "Drizzle") {
            document.getElementById("weathericon").src = "images/drizzle.png"
        } else if (responce.weather[0].main == "Mist") {
            document.getElementById("weathericon").src = "images/mist.png"

        }

        console.log(responce.cod);
    }


}





function hamada() {
    if (main.style.display == "none") {
        main.style.display = "block"
        return true
    }

}

if (responce.cod == 404 && search.value == undefined) {
    main.style.display = "none"

} else {

    console.log(responce);
    document.getElementById("namecity").innerHTML = responce.name
    document.getElementById("humidity").innerHTML = responce.main.humidity + "%"
    document.getElementById("speed").innerHTML = responce.wind.speed + "km/h"
    document.getElementById("temp").innerHTML = responce.main.temp + `<sup>0</sup>c`
    if (responce.weather[0].main == "Clouds") {
        document.getElementById("weathericon").src = "images/clouds.png"
    } else if (responce.weather[0].main == "Clear") {
        document.getElementById("weathericon").src = "images/clear.png"
    } else if (responce.weather[0].main == "Drizzle") {
        document.getElementById("weathericon").src = "images/drizzle.png"
    } else if (responce.weather[0].main == "Mist") {
        document.getElementById("weathericon").src = "images/mist.png"

    }
    main.style.display = "block"
    console.log(responce.cod);
}
