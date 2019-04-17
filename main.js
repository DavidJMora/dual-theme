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

}

function populateHTML() {
    document.querySelector('#history').innerText = newYork["history"];

    const map = document.createElement('td');
    const appendElement = document.querySelector('#table-map');
    map.innerText = 'hello';
    appendElement.appendChild('map')
}