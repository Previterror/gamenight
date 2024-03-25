import { AppState } from './AppState.js';
import { PlayerController } from './controllers/PlayerController.js';
import { router } from './router-config.js';

class App {

  router = router

  PlayerController = new PlayerController()

  init() {
    this.router.init(app)
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
console.log(new PlayerController())
console.log(AppState)
