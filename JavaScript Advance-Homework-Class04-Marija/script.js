let BASE_URL = "https://swapi.dev/api/planets/?page=1";
let BASE_URL_2 = "https://swapi.dev/api/planets/?page=2";
let resultDiv = document.getElementById("result__div");
let btn = document.getElementById("show__btn");
let div = document.getElementById("click");

const getPlanetsPromise = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    getPlanets(data.results);
}
function getPlanets(planets){
    let result = "";;
    result += `<tr>
        <th>Planet Name</th>
        <th>Population</th>
        <th>Climate</th> 
        <th>Gravity</th>
    </tr>`;
    for (let i = 0; i < planets.length; i++) {
      let planet = planets[i];
      result += `
      <tr>
            <td>${planet.name}</td>
            <td>${planet.population}</td>
            <td>${planet.climate}</td>
            <td>${planet.gravity}</td>
      </tr>`;
    };
    resultDiv.innerHTML = result;
    resultDiv.appendChild("tr");
}
btn.addEventListener("click", function(){
    getPlanetsPromise(BASE_URL);
    next10Planets();
});

function next10Planets(){
  let next10PlanetsButton = document.createElement("button");
  next10PlanetsButton.innerText = "NEXT 10 PLANETS";
  div.innerHTML = "";
  div.appendChild(next10PlanetsButton);
  next10PlanetsButton.addEventListener("click", function(){
    getPlanetsPromise(BASE_URL_2);
    previous10Planets();
  })
}
function previous10Planets(){
  let prev10PlanetsButton = document.createElement("button");
  prev10PlanetsButton.innerText = "Prev 10 PLANETS";
  div.innerHTML = "";
  div.appendChild(prev10PlanetsButton);
  prev10PlanetsButton.addEventListener("click", function(){
    getPlanetsPromise(BASE_URL);
    next10Planets();
  })
}