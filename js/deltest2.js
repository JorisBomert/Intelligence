window.Test2 = (function () {
    "use strict";

    var content = document.getElementById("content");
    var question = "How does the following sequence continue?";
    var correctAnswer;
    var maxPoints = 3;

    window.testPoints2 = 0;
    window.fizzBuzzArray = [];
    window.sequence = [];
    window.choices = ["Fizz", "Buzz", "FizzBuzz"];
    window.hiddenNumber = [];
    window.hiddenSequence = [];

    window.test2Intro = function() {
        window.inTest1 = false;
        content.innerHTML = '<div class="introduction"><h3>FizzBuzz</h3>\n' +
        '<p>In this test you will see a sequence of the game FizzBuzz,\n' +
        ' you will have to answer how the sequence continues.</p><p>Is\n' +
        ' the number a multiple of 3, the number should be replaced by Fizz. \n' +
        'Is the number a multiple of 5, the number should be replaced by Buzz.\n' +
        ' Is the number a multiple of both 3 and 5, then the number should\n' +
        ' be replaced by FizzBuzz.</p><button type="button" id="button">\n' +
        'Click here to start the test</button></div>';
        document.getElementsByTagName("button")[0].addEventListener("click", window.createFizzBuzz);
    };

    function fizzBuzz(start, stop) {
        for (var i = start; i < stop; i++) {
            if ((i%3) === 0 && (i%5) === 0) {
                window.hiddenNumber.push(i);
                window.fizzBuzzArray.push("FizzBuzz");
            } else if ((i%5) === 0) {
                window.hiddenNumber.push(i);
                window.fizzBuzzArray.push("Buzz");
            } else if ((i%3) === 0) {
                window.hiddenNumber.push(i);
                window.fizzBuzzArray.push("Fizz");
            } else {
                window.hiddenNumber.push(i);
                window.fizzBuzzArray.push(i);
            }
        }
    }

    function random(range) {
        return Math.floor(Math.random() * range);
    }

    function randomize() {
        return random(2);
    }

    function listChoices(l) {
        var list = "";

        for (var i = 0; i < l.length; i++) {
            list += '<li class="choices">' + l[i] + '</li>';
        }
        return list;
    }

    window.createFizzBuzz = function() {
        fizzBuzz(1, 5000);
        var arrayMinusSix = window.fizzBuzzArray.length - 6;
        var randomNr = window.fizzBuzzArray[Math.floor(Math.random() * (arrayMinusSix))];
        var number = window.fizzBuzzArray.indexOf(randomNr);
        var numberMax = number + 6;

        window.inTest2 = true;

        for (var i = number; i < numberMax; i++) {
            window.sequence.push(window.fizzBuzzArray[i]);
            window.hiddenSequence.push(window.hiddenNumber[i]);
            number++;
        }

        console.log(window.sequence);
        console.log(window.hiddenSequence);

        window.choices.push(window.hiddenSequence[5]);

        correctAnswer = window.sequence[5];
        window.sequence[5] = "?";

        console.log(window.choices);

        window.choices.sort(randomize);
        window.choices.sort(randomize);

        content.innerHTML = '<div class="introduction"><h3>' + question + '</h3>\n' +
        '<p>' + window.sequence.join(", ") + '\n' + '</p><div id="choices"\n' +
        '>' + listChoices(window.choices) + '</div></div>';

        document.getElementById("choices").addEventListener("click", checkAnswer);
    };

    function checkAnswer(e) {
        var button = e.target;

        if (button.innerHTML == correctAnswer) {
            console.log("you clicked on: " + button.innerHTML);
            window.testPoints2 += maxPoints;
            content.innerHTML = '<div class="introduction"><h1>Correct!</h1><button\n' +
            ' type="button">Click here to continue</button></div>';
            document.getElementsByTagName("button")[0].addEventListener("click", result);
        } else {
            console.log("you clicked on: " + button.innerHTML);
            console.log("The correct answer was: " + correctAnswer);
            console.log("Points: " + window.points);
            content.innerHTML = '<div class="introduction"><h1>False!</h1>\n' +
            '<button type="button">Click here to continue</button></div>';
            document.getElementsByTagName("button")[0].addEventListener("click", result);
        }
    }

    function result() {
        content.innerHTML = '<div class="introduction"><h3>FizzBuzz</h3><br>\n' +
        '<p>Your points: ' + window.testPoints2 + '</p><p>Maximum amount of points: \n' +
        maxPoints + '</p><button type="button">\n' +
        'Click here to continue</button></div>';
        window.inTest2 = false;
        document.getElementsByTagName("button")[0].addEventListener("click", window.showIntro3);
        window.points += window.testPoints2;
    }
}());
