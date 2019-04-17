windows.onload = init;

function init() {
    document.querySelector('.new-york')
        .addEventListener('click', changeNewYork);

    document.querySelector('.lawrence')
        .addEventListener('click', changeLawrence);
}
