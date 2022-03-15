export default class Character {
  constructor({
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  }) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.type = type;
    this.gender = gender;
    this.origin = origin;
    this.location = location;
    this.image = image;
    this.episodes = episode;
    this.url = url;
    this.created = created;
  }

  static async all() {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await res.json();
    return characters;
  }

  static async getById(id) {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await res.json();
    return character;
  }

  getOrigin() {
    const div = document.createElement('div');
    const divText = `<p>${this.name} is from ${this.origin.name}</p>`;
    div.innerHTML = divText;
    return div;
  }

  getCard() {
    const div = document.createElement('div');
    const card = /*html*/ `
    <div class="card bg-primary h-96 w-56">
      <figure>
        <img src=${this.image} />
      </figure>
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
     <img class="h-20 w-20 mask mask-circle" src=${this.image}>
      <div class="flex flex-col">
        <h3 class="font-bold text-lg text-center">${this.name}</h3>
        <div class="flex flex-col">
          <span>${this.gender}</span>
          <span>${this.species}</span>
          <span>${this.status}</span>
        </div>
      </div>
        <p class="py-4">${this.name} is from ${this.origin.name}</p>
       <div class="modal-action">
         <label for=${this.id} class="btn btn-sm rounded">close</label>
       </div>
     </div>
    </div>
    `;

    return item;
  }
}
