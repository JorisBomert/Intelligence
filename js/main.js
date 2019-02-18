window.Test = (function () {
    "use strict";

    var content = document.getElementById("content");
    var tempPoints;

    // points per test and the total amount of points possible
    var maxPoints1 = 15;
    var maxPoints2 = 3;
    var maxPoints3 = 9;
    var maxPointsAll = maxPoints1 + maxPoints2 + maxPoints3;

    window.inTest1 = false;
    window.inTest2 = false;
    window.inTest3 = false;

    function showTests() {
        window.Test1.introduction();
    }

    function howGood() {
        var bad = window.points < 10;
        var avarage = window.points >= 10 && window.points <= 17;
        var good = window.points > 17 && window.points < 25;
        var veryGood = window.points >= 25;
        var placement = document.getElementById("howgood");

        if (bad) {
            placement.innerHTML += '<p>Your result sadly is lower than avarage. If you want to \n' +
            'you can try practice more with the specific skills you did not score high on.';
        } else if (avarage) {
            placement.innerHTML += '<p>Your result is about avarage. There is nothing\n' +
            ' to worry about as most participants get a score similar to yours. But\n' +
            ' if you want to you could pratice some more with the tests you scored lowest on.';
        } else if (good) {
            placement.innerHTML += '<p>Good job! You scored higher than avarage!\n' +
            ' You score higher than most participants on word knowledge, quick\n' +
            ' mathematical thinking and memory.';
        } else if (veryGood) {
            placement.innerHTML += '<p>Very good job! Your score is one of the\n' +
            ' higher that only a small percentage of our participants achieve.\n' +
            ' It certainly is a result you can be proud of!';
        }
    }

    function endTest() {
        content.innerHTML = '<p>The test has ended</p>';
    }

    window.endResult = function () {
        var realPoints = window.points / maxPointsAll * 10;
        var roundPoints = Math.round( realPoints * 10 ) / 10;

        content.innerHTML = '<div class="introduction"><h3>Thank you for your\n' +
        ' time!</h3><p>The result of the test are very valuable for us and\n' +
        ' will be used in coming analysis.</p> <b><p>Your result:</p></b>\n' +
        '<p>You have got ' + window.points + ' points, out of a maximum \n' +
        'of ' + maxPointsAll + ' points.</p><p>On a grade system of 1 to 10 \n' +
        'you have got ' + roundPoints + ' out of 10.</p><div id="howgood"></div>\n' +
        '<br><p>Thank you!</p><button type="button">Click here to end the test\n' +
        '</button></div>';
        howGood();
        document.getElementsByTagName("button")[0].addEventListener("click", endTest);
    };

    function resetPoints() {
        tempPoints = window.points;
        window.points = 0;
        window.points += tempPoints;
    }


    var test = {
        "reset": function() {
            if (window.inTest1) {
                window.testPoints1 = 0;
                window.qNumber = 0;
                window.points = 0;
                window.test1display();
            } else if (window.inTest2) {
                window.testPoints2 = 0;
                window.fizzBuzzArray = [];
                window.sequence = [];
                window.hiddenNumber = [];
                window.hiddenSequence = [];
                window.choices = ["Fizz", "Buzz", "FizzBuzz"];
                resetPoints();
                window.test2Intro();
            } else if (window.inTest3) {
                window.testPoints3 = 0;
                window.flagArray = [];
                resetPoints();
                window.clicks = 0;
                window.answerCorrect = 0;
                window.shuffle();
                window.onClick();
                window.createFlags();
            }
        },

        "showTotalPoints": function() {
            console.log(window.points);
        }
    };

    showTests();

    return test;
})();
