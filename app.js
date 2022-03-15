import Character from './src/character.js';
import Episode from './src/episode.js';
import Location from './src/location.js';

document
  .querySelector('#get-chars')
  .addEventListener('click', async function (e) {
    const container = document.querySelector('#all-chars');
    const allCharacters = await Character.all();
    console.log(allCharacters);
    //you code here
  });

document
  .querySelector('#get-episodes')
  .addEventListener('click', async function (e) {
    const container = document.querySelector('#all-episodes');
    const allEpisodes = await Episode.all();
    console.log(allEpisodes);
    // you code here
  });

document
  .querySelector('#get-locations')
  .addEventListener('click', async function (e) {
    const container = document.querySelector('#all-locations');
    const allLocations = await Location.all();
    console.log(allLocations);
    // you code here
  });
