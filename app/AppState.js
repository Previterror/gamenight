import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Player } from './models/PlayersModel.js';

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  players = [
    new Player("Jake"),
    new Player("Bilbo"),
    new Player("Magneto"),
  ]

}



export const AppState = createObservableProxy(new ObservableAppState())