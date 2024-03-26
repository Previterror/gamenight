import { AppState } from "../AppState.js";
import { Player } from "../models/PlayersModel.js";


class PlayerService {
    increasePoint(playerName) {
        const playerToIncrease = AppState.players.find(player => player.name == playerName)
        playerToIncrease.score += 1
        console.log(AppState.players)
        savePlayers()
    }

    reducePoint(playerName) {
        const playerToReduce = AppState.players.find(player => player.name == playerName)
        playerToReduce.score -= 1
        console.log(AppState.players)
        savePlayers()
    }

    addPlayer(formOutput) {
        AppState.players.push(new Player(formOutput))
        console.log(AppState.players)
        savePlayers()
    }

}



export const playerService = new PlayerService()

function savePlayers() {
    let toSave = JSON.stringify(AppState.players)
    window.localStorage.setItem('players', toSave)
}