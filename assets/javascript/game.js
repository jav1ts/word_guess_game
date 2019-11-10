$(document).ready(function () {

    let userGuess = "";
    let wrongGuess = 0;
    let correctGuess = 0;

    var movies = ["Terminator", "Titanic", "Lion King", "Rush Hour", "John Wick", "Kill Bill", "Frozen"];
    var movieAnswer = movies[Math.floor(Math.random() * movies.length)].toUpperCase().split('');
    let myBoxes = $('.mystart');
    let wrongKey = $('.badguess');

    //board setup
    for (let i = 0; i < movieAnswer.length; i++) {
        if (movieAnswer[i] === ' ') {
            continue;
        } else {
            myBoxes[i].classList.add("white");
        }
    }

    let answerChecker = (letter, arr) => {
        if (arr.indexOf(letter) >= 0) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === letter) {
                    myBoxes[i].innerText = `${arr[arr.indexOf(letter)]}`;
                }
            }
        } else {
            wrongGuess += 1;
            alert("There is no letter "+userGuess+". You have "+(5-wrongGuess)+" guesses left.");
            if (wrongGuess >= 5){
                alert("GAME OVER! You need to watch more movies!");
            }
        }
    }

    $(document).keydown(event => {
        userGuess = event.key.toUpperCase();
        answerChecker(userGuess, movieAnswer);
    });
});