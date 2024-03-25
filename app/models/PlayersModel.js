export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    get PlayerTemplateCard() {
        return `
          <div class="card>
            <div class="card-body">
            ${this.name} -  ${this.score} <button onclick="app.PlayerController.scorePoint('${this.name}')">+</button>
            </div>
          </div>
      `
    }
}
