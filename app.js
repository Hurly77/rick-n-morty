import Character from './src/character.js';
import Episode from './src/episode.js';
import Location from './src/location.js';

document
  .querySelector('#get-chars')
  .addEventListener('click', async function (e) {
    const container = document.querySelector('#all-chars');
    const chars = await Character.all();
    chars.results.map((char) => {
      const character = new Character(char);
      container.appendChild(character.getBar());
    });
  });

document
  .querySelector('#get-episodes')
  .addEventListener('click', async function (e) {
    const container = document.querySelector('#all-episodes');
    const chars = await Episode.all();
    chars.results.map((obj) => {
      const episode = new Episode(obj);
      container.appendChild(episode.getBar());
    });
  });

document
  .querySelector('#get-locations')
  .addEventListener('click', async function (e) {
    const container = document.querySelector('#all-locations');
    const allLocations = await Location.all();
    console.log(allLocations);
    allLocations.results.map((obj) => {
      const location = new Location(obj);
      container.appendChild(location.getBar());
    });
  });
