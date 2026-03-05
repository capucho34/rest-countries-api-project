import { renderCountriesList } from "./dom-utils.js"; 
console.log("test");
const API_URL_ALL = "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags,population,region";
let countries;
let query = "";
fetch(API_URL_ALL)
    .then((res) => res.json())
    .then((countriesRaw) => {
    countries = countriesRaw.map((country) => {
        return {
            capital: country.capital && country.capital[0],
            population: country.population,
            name: country.name.common,
            region: country.region,
            flagUrl: country.flags.png,
        };
    });
        console.log(countries);
        renderCountriesList(countries);
});

document.querySelector('#query').addEventListener("input", (e) => {
    const query = e.target.value;
    countries = countries.filter((country) =>
        country.name.toLowerCase().includes(query.toLowerCase())
);
    console.log("change", e.target.value);
    renderCountriesList(countries);
});