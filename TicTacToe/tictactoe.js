var board
var player0 = "0"
var playerX = "X"
var currPlayer = player0
var gameOver = false

window.onload = function() {
    setGame()
}

function setGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            //div id="0-0"</div>
            let tile = document.createElement("div")
            tile.id = r.toString + "-" + c.toString
            tile.classList.add("tile")
            if (r == 0 || r== 1) {
                tile.classList.add("horizontal-line")
            }
            if (c == 0 || c== 1) {
                tile.classList.add("vertical-line")
            }
            document.getElementById("board").append(tile)
        }
    }
}
