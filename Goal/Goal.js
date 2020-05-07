// code for the goal 3 by 3 randomization
// 9 ranomized sections with 6 possible colours
// no more than 4 of the same colours to be completable
// colours : white, blue, red, orange, yellow, green

const canvas = document.getElementById("goal-canvas");
const context = canvas.getContext("2d");

function drawRect(x, y, w, h, color = "black") {
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}
function drawText(text, x, y, color = "black") {
    context.fillStyle = color;
    context.font = "20px Trebuchet MS";
    context.fillText(text, x, y);
}


const goalBoard = {
    goalSquareSize: 50,
    goalBoardState: [[],[],[]],
    randomize: function() {
        const availableColours = ['white', 'blue', 'red', 'orange', 'yellow', 'green'];
        const frequency = [0,0,0,0,0,0];
        for (let i = 0; i < 9; i ++) {
            const random = Math.floor(Math.random() * availableColours.length);
            const row = Math.floor(i / 3);
            const col = i % 3;
            this.goalBoardState[row][col] = availableColours[random];
            frequency[random]++;

            if (frequency[random] >= 4 ) {
                availableColours.splice(random, 1);
                frequency.splice(random, 1);
            }
        }
    },
    show: function() {
        for (let i = 0; i < 9; i++) {
            const row = Math.floor(i / 3);
            const col = i % 3;
            drawRect(col*this.goalSquareSize + 1, row*this.goalSquareSize + 1, this.goalSquareSize, this.goalSquareSize, this.goalBoardState[row][col]);
        }
    }
 }

 
drawRect(0, 0, 152, 152, 'black');//board outline
goalBoard.randomize();
goalBoard.show();