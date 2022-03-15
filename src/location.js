export default class Location {
  constructor({ id, name, type, dimension, residents, url, created }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.dimension = dimension;
    this.residents = residents;
    this.url = url;
    this.created = created;
  }

  static async all() {
    const res = await fetch('https://rickandmortyapi.com/api/location');
    const data = await res.json();
    return data;
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
          <span>${this.dimension}</span>
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
