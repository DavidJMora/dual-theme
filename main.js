window.onload = init;

function init() {
    populateHTML();

    document.querySelector('.new-york')
        .addEventListener('click', toggleNY);

    document.querySelector('.lawrence')
        .addEventListener('click', toggleLawrence);
}

function toggleNY(event) {
    const lawrenceButton = document.querySelector('.lawrence');
    const nyButton = document.querySelector('.new-york');
    lawrenceButton.disabled = false;
    nyButton.disabled = true;

    toggleCity(newYork);
}

function toggleLawrence(event) {
    const lawrenceButton = document.querySelector('.lawrence');
    const nyButton = document.querySelector('.new-york');
    lawrenceButton.disabled = true;
    nyButton.disabled = false;

    toggleCity(lawrence);
}

function toggleCity(city) {
    document.querySelector('#city-name').innerText = city["name"];
    document.querySelector('.population').innerText = city["population"];
    document.querySelector('.map').src = city["tableImage"];
    document.querySelector('.founded').innerText = city["founded"];
    document.querySelector('#history').innerText = city["history"];
    document.querySelector('#climate').innerText = city["climate"];
    document.querySelector('.mayor').innerText = city["mayor"];
    document.querySelector('.elevation').innerText = city["elevation"];

}

function populateHTML() {
    event.preventDefault();

    const button = document.querySelector('.new-york');
    button.disabled = true;

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
    population.className = "population table-info";
    appendElement.appendChild(population);

    const founded = document.createElement('td');
    appendElement = document.querySelector('#table-founded');
    founded.innerText = newYork["founded"];
    founded.className = "founded table-info";
    appendElement.appendChild(founded);

    const mayor = document.createElement('td');
    appendElement = document.querySelector('#table-mayor');
    mayor.innerText = newYork["mayor"];
    mayor.className = "mayor table-info";
    appendElement.appendChild(mayor);

    const elevation = document.createElement('td');
    appendElement = document.querySelector('#table-elevation');
    elevation.innerText = newYork["elevation"];
    elevation.className = "elevation table-info";
    appendElement.appendChild(elevation);
}