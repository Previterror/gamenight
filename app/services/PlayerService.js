import { AppState } from "../AppState.js";
import { Player } from "../models/PlayersModel.js";


class PlayerService {
    increasePoint(playerName) {
        const playerToIncrease = AppState.players.find(player => player.name == playerName)
        playerToIncrease.score += 1
        console.log(AppState.players)
    }

    addPlayer(formOutput) {
        AppState.players.push(new Player(formOutput))
        console.log(AppState.players)
    }
}

export const playerService = new PlayerService()