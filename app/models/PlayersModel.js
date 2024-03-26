export class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }

  get PlayerTemplateCard() {
    return `
          <div class="card bg-dark text-light col-11 m-1">
            <div class="card-body row justify-content-between text-center p-1">
            <span>${this.name}</span> 
            <span><button onclick="app.PlayerController.reducePoint('${this.name}')">-</button> ${this.score} <button onclick="app.PlayerController.scorePoint('${this.name}')">+</button></span>
            </div>
          </div>
      `
  }
}
