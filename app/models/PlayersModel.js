export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    get PlayerTemplateCard() {
        return `
          <div class="card col-11">
            <div class="card-body col-11">
            ${this.name} -  ${this.score} <button onclick="app.PlayerController.scorePoint('${this.name}')">+</button>
            </div>
          </div>
      `
    }
}
