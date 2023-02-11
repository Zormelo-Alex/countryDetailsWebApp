console.log("DOM")

const url = "https://restcountries.com/v3.1/name/";

//selectors

const country = document.getElementById("country");
const btn = document.getElementById('btn')
const flag = document.querySelector(".flag")
const details = document.querySelector(".details")

const getCountry = () => {
    fetch(url+country.value)
    .then(res => res.json())
    .then(data => {
        //console.log(data[0])
        //console.log(Object.keys(data[0]))
        flag.innerHTML = `
        <img src="${data[0].flags.png}" alt="">
            <h3>${data[0].name.common}</h3>
        `
        details.innerHTML = `
        <div class="detail">Capital: <span class="deet">${data[0].capital[0]}</span></div>
            <div class="detail">Continent: <span class="deet">${data[0].continents}</span></div>
            <div class="detail">Population: <span class="deet">${data[0].population} people</span></div>
            <div class="detail">Currency: <span class="deet">${Object.keys(data[0].currencies)[0]}</span></div>
            <div class="detail">Common Languages: <span class="deet">${Object.keys(data[0].languages)[0]}</span></div>
        `
        country.value = ""
    })
    .catch(err => {
        console.log(err.message);
        flag.innerHTML = `<h3>sorry country not found...</h3>`
        details.innerHTML = ""
    })
}

btn.addEventListener("click", getCountry)
window.addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        getCountry();
    }
})