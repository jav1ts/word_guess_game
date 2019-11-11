$(document).ready(function () {

    let userGuess = "";
    let wrongGuess = 0;
    let correctGuess = 0;
    let counter = 0;
    let trashBin = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz1234567890".toUpperCase().split("");



    var movies = ["Terminator 2", "Titanic", "Lion King", "Rush Hour", "John Wick", "Kill Bill", "Frozen", "Inglourious Basterds", "Rumble in the Bronx"];
    var movieAnswer = movies[Math.floor(Math.random() * movies.length)].toUpperCase().split('');
    let myBoxes = $('.mystart');
    let wrongKey = $('.badguess');

    
    if (movieAnswer.join("") === "TERMINATOR 2") {
        alert("Hasta la vista baby");
    }

    if (movieAnswer.join("") === "TITANIC") {
        alert("A woman's heart is a deep ocean of secrets.");
    }

    if (movieAnswer.join("") === "LION KING") {
        alert("Hakuna Matata!");
    }

    if (movieAnswer.join("") === "RUSH HOUR") {
        alert("DO YOU UNDERSTAND THE WORDS THAT ARE COMING OUTTA MY MOUTH?");
    }

    if (movieAnswer.join("") === "JOHN WICK") {
        alert("They call him... Baba Yaga.");
    }

    if (movieAnswer.join("") === "KILL BILL") {
        alert("That woman deserves her revenge... and we deserve to die.");
    }

    if (movieAnswer.join("") === "FROZEN") {
        alert("The cold never bothered me anyway.");
    }

    if (movieAnswer.join("") === "INGLOURIOUS BASTERDS") {
        alert("Each and every man under my command owes me one hundred Nazi Scalps.");
    }

    if (movieAnswer.join("") === "RUMBLE IN THE BRONX") {
        alert("You don't need diamonds in the bathroom.");
    }



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

                if (trashBin.indexOf(letter) <= -1) {
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