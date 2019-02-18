window.Test1 = (function () {
    "use strict";

    window.points = 0;
    window.testPoints1 = 0;
    var content = document.getElementById("content");
    var words = ["forbearance", "dogmatic", "lubberly", "furtive", "impeccable"];
    var answers = ["patience", "certain", "clumsy", "secretive", "perfect"];
    var choices = [
        ["forbidden", "premature", "patience", "temporary"],
        ["sensitive", "valuable", "dramatic", "certain"],
        ["clumsy", "slimy", "weak", "lazy"],
        ["stupid", "secretive", "fortunate", "arrogant"],
        ["impenetrable", "proud", "perfect", "impossible"]
    ];
    var i;

    window.qNumber = 0;
    var qNumber = window.qNumber;
    var pointsPerCorrect = 3;

    function test1Intro() {
        content.innerHTML = '<div class="introduction"><h3>Word Knowledge</h3>\n' +
        '<p>In this test your vocabulary will be put to the test. A word will\n' +
        ' be shown up top, you will then have to click on the correct meaning \n' +
        'of the word. All these questions are multiple choice.</p><button\n' +
        ' type="button" id="button2">Click here to start the test</button></div>';
    }

    window.test1display = function() {
        test1Intro();
        document.getElementsByTagName("button")[0].addEventListener("click", test1.Q1);
    };

    function checkAnswer(e) {
        var button = e.target;

        console.log("You guessed " + button.innerHTML);
        for (i = 0; i < choices.length; i++) {
            console.log("The correct answer is: " + answers[qNumber]);
            if (button.innerHTML === answers[qNumber]) {
                window.testPoints1 += pointsPerCorrect;
                console.log("You guessed right! Well done!");
                console.log("You have " + window.testPoints1 + " points.");
                qNumber++;
                if (qNumber === 1) {
                    test1.Q2();
                } else if (qNumber === 2) {
                    test1.Q3();
                } else if (qNumber === 3) {
                    test1.Q4();
                } else if (qNumber === 4) {
                    test1.Q5();
                } else if (qNumber === 5) {
                    test1.result();
                }
            } else {
                console.log("You guessed wrong.");
                console.log("You have " + window.testPoints1 + " points.");
                qNumber++;
                if (qNumber === 1) {
                    test1.Q2();
                } else if (qNumber === 2) {
                    test1.Q3();
                } else if (qNumber === 3) {
                    test1.Q4();
                } else if (qNumber === 4) {
                    test1.Q5();
                } else if (qNumber === 5) {
                    test1.result();
                }
            }
        }
    }

    var test1 = {
        "introduction": function() {
            content.innerHTML = '<div class="introduction"><h3>Welcome!</h3>\n' +
            '<p>This is a test to test your cognitive ability. The test is \n' +
            'split in parts, where every part starts starts with an own \n' +
            'introduction of the next test.</p><p>Good luck!</p><button\n' +
            ' type="button">Click here to continue</button></div>';
            var button = document.getElementsByTagName("button")[0];

            button.addEventListener("click", window.test1display);
        },

        "Q1": function() {
            window.inTest1 = true;
            var choice = document.getElementsByClassName("choices");

            test1.showQuiz(0);
            for (i = 0; i < choice.length; i++) {
                choice[i].addEventListener("click", checkAnswer, false);
            }
        },

        "Q2": function() {
            var choice = document.getElementsByClassName("choices");

            console.log("Question 2");
            test1.showQuiz(1);
            for (i = 0; i < choice.length; i++) {
                choice[i].addEventListener("click", checkAnswer, false);
            }
        },

        "Q3": function() {
            var choice = document.getElementsByClassName("choices");

            console.log("Question 3");
            test1.showQuiz(2);
            for (i = 0; i < choice.length; i++) {
                choice[i].addEventListener("click", checkAnswer, false);
            }
        },

        "Q4": function() {
            var choice = document.getElementsByClassName("choices");

            console.log("Question 4");
            test1.showQuiz(3);
            for (i = 0; i < choice.length; i++) {
                choice[i].addEventListener("click", checkAnswer, false);
            }
        },

        "Q5": function() {
            var choice = document.getElementsByClassName("choices");

            console.log("Question 5");
            test1.showQuiz(4);
            for (i = 0; i < choice.length; i++) {
                choice[i].addEventListener("click", checkAnswer, false);
            }
        },

        "listChoices": function(l) {
            var list = "";

            for (i = 0; i < l.length; i++) {
                list += '<li class="choices">' + l[i] + '</li>';
            }
            return list;
        },

        "showQuiz": function(i) {
            content.innerHTML = '<div class="introduction"><h2>' + words[i] +'</h2>\n' +
            '<div id="choices">' + test1.listChoices(choices[i]) + '</div></div>';
        },

        "result": function() {
            content.innerHTML = '<div class="introduction"><h3>Word Knowledge</h3><br>\n' +
            '<p>Your points: ' + window.testPoints1 + '</p><p>Maximum amount of points: \n' +
            words.length * pointsPerCorrect + '</p><button type="button" id="button3">\n' +
            'Click here to continue</button></div>';
            window.points += window.testPoints1;
            document.getElementsByTagName("button")[0].addEventListener("click", window.test2Intro);
        }
    };

    return test1;
}());
