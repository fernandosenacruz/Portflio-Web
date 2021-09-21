const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const loading = () => {
  const mesLoading = document.querySelector('.displayNone');

  mesLoading.className = 'loading';
};

const loaded = () => {
  const loaded = document.querySelector('.loading');
  loaded.className = 'displayNone';
};

const createElement = (element, id, innerHTML) => {
    const e = document.createElement(element);
    e.id = id;
    e.innerHTML = innerHTML;
    return e;
};

const getImgPokemon = (imgSrc, polemonName) => {
    const img = document.createElement('img');
    img.className = polemonName;
    img.src = imgSrc;
    return img;
}

const getStats = (obj) => obj.reduce((acc, objCurr) => {
    acc += `${objCurr.stat.name}: ${objCurr.base_stat}`
    return acc}, '');


const getPokemon = async () => {
    const inputNamePokemon = document.getElementById('input_pokemon').value;
    try {
        loading()
        setTimeout( async () => {
            const response = await fetch(`${API_URL}${inputNamePokemon}`);
            const body = document.querySelector('body');
            const data = await response.json();
            loaded();
            const creatPokemon = createElement('section', data.name, JSON.stringify(getStats(data.stats)));
            body.appendChild(creatPokemon).appendChild(getImgPokemon(data.sprites.front_default, data.species.name));
        

        },1000);
    } catch (error) {
        console.log(error);
    }
}

window.onload = () => {
    const benjaminButton = document.getElementById('pesquisar');
    benjaminButton.addEventListener('click', getPokemon) ;
}