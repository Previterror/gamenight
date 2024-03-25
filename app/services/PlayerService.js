import { AppState } from "../AppState.js";


class PlayerService {
    increasePoint(playerName) {
        const playerToIncrease = AppState.players.find(player => player.name == playerName)
        playerToIncrease.score += 1
        console.log(playerToIncrease.score)
    }
}

export const playerService = new PlayerService()