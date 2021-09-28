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
    e.innerHTML = `<p>${innerHTML}</p>`;
    e.className = 'xibil'
    return e;
};

const getImgPokemon = (imgSrc, pokemonName) => {
    const img = document.createElement('img');
    img.className = pokemonName;
    img.src = imgSrc;
    return img;
}

const getStats = (obj) => obj.reduce((acc, objCurr) => {
    acc += `${objCurr.stat.name}: ${objCurr.base_stat}<br>`;
    return acc}, '');


const getPokemon = async () => {
    const inputNamePokemon = document.getElementById('input_pokemon').value.toLowerCase();
    try {
        loading()
        setTimeout( async () => {
            const response = await fetch(`${API_URL}${inputNamePokemon}`);
            if (response.status !== 200) {
                alert(`C tá maluko é? Kd seus estudos?`);
                loaded();
                return 0;
            };
            const pokeStage = document.querySelector('.pokeStage');
            const data = await response.json();
            loaded();
            const creatPokemon = createElement('section', data.name, JSON.stringify(getStats(data.stats)));
            pokeStage.appendChild(creatPokemon).appendChild(getImgPokemon(data.sprites.front_default, data.species.name));
        },1000);
    } catch (error) {
        return error(new Error('Ximira'));
    }
}

window.onload = () => {
    const benjaminButton = document.getElementById('pesquisar');
    benjaminButton.addEventListener('click', getPokemon) ;
}