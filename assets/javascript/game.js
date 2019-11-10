$(document).ready(function () {

    let userGuess = "";
    let wrongGuess = 0;
    let correctGuess = 0;
    let counter = 0;
    let trashBin = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
    console.log(alphabet);


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

    let answerChecker = (letter, arr, abcArray) => {
        if (arr.indexOf(letter) >= 0) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === letter) {
                    myBoxes[i].innerText = `${arr[arr.indexOf(letter)]}`;
                }

            }
        } else {
            if (abcArray.indexOf(letter)) {

                if (trashBin.indexOf(letter) < 0) {
                    wrongKey[counter].innerText = letter;
                    counter++;
                    trashBin.push(letter);

                }
            }
            // wrongGuess += 1;
            // alert("There is no letter "+letter+". You have "+(5-letter)+" guesses left.");
            // if (wrongGuess >= 5){
            //     alert("GAME OVER! You need to watch more movies!");
            // }
        }
    }

    $(document).keydown(event => {

        if (alphabet.indexOf(event.key.toUpperCase()) >= 0) {
            userGuess = event.key.toUpperCase();
        }


        answerChecker(userGuess, movieAnswer, alphabet);
    });
});