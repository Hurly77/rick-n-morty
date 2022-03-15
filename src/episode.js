export default class Episode {
  constructor({ id, name, air_date, episode, characters, url }) {
    this.id = id;
    this.name = name;
    this.air_date = air_date;
    this.episode = episode;
    this.characters = characters;
    this.url = url;
  }

  static async all() {
    const res = await fetch('https://rickandmortyapi.com/api/episode');
    const Episodes = await res.json();
    return Episodes;
  }

  static async getById(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const Episode = await res.json();
    return Episode;
  }

  getCard() {
    const div = document.createElement('div');
    const card = /*html*/ `
    <div class="card bg-primary h-96 w-56">
      <div class="card-body">
        <span class="card-title">${this.name}</span>
      </div>
    </div>`;
    div.innerHTML = card;
    return div;
  }

  getBar() {
    const item = document.createElement('li');
    item.className =
      'bg-base-100 py-5 justify-between h-fit px-3 w-full flex items-center rounded my-2 text-sm';

    item.innerHTML = /*html*/ `
      <p class="text-lg text-secondary flex items-center">
      ${this.name}
      </p>
      <label for=${this.id} class="btn btn-sm rounded modal-button">see more</label>
    <input type="checkbox" id=${this.id} class="modal-toggle">
    <div class="modal">
     <div class="modal-box">
      <div class="flex flex-col">
        <h3 class="font-bold text-lg text-center">${this.name}</h3>
        <div class="flex flex-col">
          <span>${this.episode}</span>
          <span>${this.name}</span>
        </div>
      </div>
        <p class="py-4">${this.name}</p>
       <div class="modal-action">
         <label for=${this.id} class="btn btn-sm rounded">close</label>
       </div>
     </div>
    </div>
    `;

    return item;
  }
}
