$(document).ready(function () {

    let userGuess = "";
    let count = 0;
    let correctGuess = 0;

    var movies = ["Terminator", "Titanic", "Lion King", "Rush Hour", "John Wick", "Kill Bill", "Frozen"];
    var movieAnswer = movies[Math.floor(Math.random() * movies.length)].toUpperCase().split('');
    let myBoxes = $('.mystart');

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
            count += 1;
            console.log(count,"this is the count");
            if (count >= 4){
                alert("GAME OVER!! YOU NEED TO WATCH MORE MOVIES");
            }
        }
    }

    $(document).keydown(event => {
        userGuess = event.key.toUpperCase();
        answerChecker(userGuess, movieAnswer);
    });
});