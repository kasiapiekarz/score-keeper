document.addEventListener("DOMContentLoaded", function () {
    var p1Btn = document.getElementById("p1");
    var p2Btn = document.getElementById("p2");
    var p1 = document.getElementById("p1Display");
    var p2 = document.getElementById("p2Display");
    var resetBtn = document.getElementById("reset");
    var inputNum = document.querySelector("input");
    var scoreLimitDisplay = document.querySelector("label span");
    var p1Score = 0;
    var p2Score = 0;
    var scoreLimit = 3;
    var gameOver = false;
    p1Btn.addEventListener("click", function () {
        if (!gameOver) {
            p1Score++;
            // console.log(p1Score);
            p1.innerHTML = p1Score;
            if (p1Score === scoreLimit) {
                p1.classList.add("winner");
                gameOver = true;
            }
        }
    });
    p2Btn.addEventListener("click", function () {
        if (!gameOver) {
            p2Score++;
            if (p2Score === scoreLimit) {
                p2.classList.add("winner");
                gameOver = true;
            }
            p2.innerHTML = p2Score;
        }
    });
    resetBtn.addEventListener("click", function () {
        reset();
    });

    function reset() {
        p1Score = 0;
        p2Score = 0;
        p1.innerHTML = p1Score;
        p2.innerHTML = p2Score;
        p1.classList.remove("winner");
        p2.classList.remove("winner");
        gameOver = false; //Set gameOver to false, allowing game to continue.
    }
    inputNum.addEventListener("change", function () {
        if (inputNum.value <= 0) {
            scoreLimit = 3;
            scoreLimitDisplay = 3;
            inputNum.value = 3;
        }
        else {
            scoreLimitDisplay.innerHTML = inputNum.value;
            scoreLimit = parseFloat(inputNum.value);
        }
        reset();
    });
});