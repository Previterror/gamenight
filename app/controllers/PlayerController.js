import { AppState } from "../AppState.js";
import { playerService } from "../services/PlayerService.js";

export class PlayerController {
    constructor() {
        // console.log(AppState.players)
        drawPlayers()
    }
    scorePoint(playerName) {
        // console.log(playerName);
        playerService.increasePoint(playerName)
        drawPlayers()
    }

    addPlayer(event) {
        event.preventDefault();
        let formOutput = event.target.elements.name.value;
        console.log('form', formOutput)
        playerService.addPlayer(formOutput)
        drawPlayers()
    }
}

function drawPlayers() {
    let playerHTML = ''
    AppState.players.forEach(player => playerHTML += player.PlayerTemplateCard)
    // console.log(playerHTML);
    let leaderBoard = (document.getElementById("leaderboard"))
    leaderBoard.innerHTML = playerHTML
}
