window.onload = init;

function init() {
    populateHTML();

    document.querySelector('.new-york')
        .addEventListener('click', () => toggleCity(newYork));

    document.querySelector('.lawrence')
        .addEventListener('click', () => toggleCity(lawrence));
}

function toggleCity(city) {
    document.querySelector('#city-name').innerText = city["name"];
    document.querySelector('.population').innerText = city["population"];
    document.querySelector('.map').src = city["tableImage"];
    document.querySelector('.founded').innerText = city["founded"];
    document.querySelector('#history').innerText = city["history"];
    document.querySelector('#climate').innerText = city["climate"];

}

function populateHTML() {
    event.preventDefault();

    document.querySelector('#history').innerText = newYork["history"];
    document.querySelector('#city-name').innerText = newYork["name"];
    document.querySelector("#climate").innerText = newYork["climate"];

    const map = document.createElement('IMG');
    appendElement = document.querySelector('#table-map');
    map.src = newYork["tableImage"];
    map.className = "map";
    appendElement.appendChild(map);

    const population = document.createElement('td');
    appendElement = document.querySelector('#table-pop');
    population.innerText = newYork["population"];
    population.className = "population";
    appendElement.appendChild(population);

    const founded = document.createElement('td');
    appendElement = document.querySelector('#table-founded');
    founded.innerText = newYork["founded"];
    founded.className = "founded";
    appendElement.appendChild(founded);
}