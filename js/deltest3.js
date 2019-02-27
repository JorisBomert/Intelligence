(function () {
    "use strict";

    window.flagArray = [];
    var emptyCountries = ["1. ...", "2. ...", "3. ...", "4. ...", "5. \n" +
    "...", "6. ...", "7. ...", "8. ...", "9. ..."];
    var allFlags = ["France", "Sweden", "Turkey", "Greenland", "Japan",
        "Holland", "Finland", "Italy", "Germany"];
    var content = document.getElementById("content");
    var grid = document.getElementsByTagName("td");
    var flag = document.getElementsByClassName("flag");

    window.clicks = 0;
    window.testPoints3 = 0;
    window.answerCorrect = 0;

    window.showIntro3 = function() {
        content.innerHTML = '<div class="introduction"><h3>Memory test</h3>\n' +
        '<p>In this test your memory will be put to the test. 9 flags will\n' +
        ' be shown for a brief moment, after that the flags will be hidden\n' +
        ' and a list of countries will be shown in a specific order. You\n' +
        ' will have to click on where the flag was placed in the correct\n' +
        ' order in the list.</p><button type="button"id="button2">Click\n' +
        ' here to start the test</button></div>';
        document.getElementsByTagName("button")[0].addEventListener("click", window.createFlags);
    };

    var makeFlag = {
        country: "",
        print: function() {
            console.log("drawing flag of " + this.country);
        },
        init: function(country) {
            this.country = country;
        },
        draw: function() {
            if (this.country.toLowerCase() === "france") {
                var flagFrance = '<div id="France" class="flag france"><div\n' +
                                ' class="left"></div><div class="right"></div></div>';

                window.flagArray.push(flagFrance);
            } else if (this.country.toLowerCase() === "sweden") {
                var flagSweden = '<div id="Sweden" class="flag swedish"><div\n' +
                                ' class="horizontal"></div><div class="vertical"></div></div>';

                window.flagArray.push(flagSweden);
            } else if (this.country.toLowerCase() === "turkey") {
                var flagTurkey = '<div id="Turkey" class="flag turkey"><div\n' +
                                ' class="circle1"></div><div class="circle2">\n' +
                                '</div><div class="star"><span>★</span></div></div>';

                window.flagArray.push(flagTurkey);
            } else if (this.country.toLowerCase() === "greenland") {
                var flagGreenland = '<div id="Greenland" class="flag greenland">\n' +
                                    '<div class="top"></div><div class="bottom">\n' +
                                    '</div><div class="circle"></div></div>';

                window.flagArray.push(flagGreenland);
            } else if (this.country.toLowerCase() === "japan") {
                var flagJapan = '<div id="Japan" class="flag japan"><div \n' +
                                'class="innerCircle"></div></div>';

                window.flagArray.push(flagJapan);
            } else if (this.country.toLowerCase() === "holland") {
                var flagHolland = '<div id="Holland" class="flag holland">\n' +
                                  '<div class="upperHolland"></div>\n' +
                                  '<div class="lowerHolland"></div></div>';

                window.flagArray.push(flagHolland);
            } else if (this.country.toLowerCase() === "finland") {
                var flagFinland = '<div id="Finland" class="flag finland">\n' +
                                  '<div class="horizontal"></div><div \n' +
                                  'class="vertical"></div></div>';

                window.flagArray.push(flagFinland);
            } else if (this.country.toLowerCase() === "italy") {
                var flagItaly = '<div id="Italy" class="flag italy"><div \n' +
                                'class="left"></div><div class="right"></div></div>';

                window.flagArray.push(flagItaly);
            } else if (this.country.toLowerCase() === "germany") {
                var flagGermany = '<div id="Germany" class="flag germany"><div\n' +
                                  ' class="upperGermany"></div><div\n' +
                                  ' class="lowerGermany"></div></div>';

                window.flagArray.push(flagGermany);
            }
        }
    };

    window.createFlags = function() {
        showNumbers();
        content.innerHTML += '<table id="flags"><tr><td></td><td></td><td></td></tr>\n' +
                             '<tr><td></td><td></td><td></td></tr>\n' +
                             '<tr><td></td><td></td><td></td></tr></table>';
        for (var i in allFlags) {
            var country = Object.create(makeFlag);

            country.init(allFlags[i].toString());
            country.draw();
            setTimeout(hideFlags, 5000);
            window.inTest3 = true;
        }

        function showNumbers() {
            content.innerHTML = '<div id="countrylist"></div>';
            var countryList = document.getElementById("countrylist");

            for (var i = 0; i < emptyCountries.length; i++) {
                countryList.innerHTML += emptyCountries[i] + '<br><br>';
            }
        }

        function hideFlags() {
            for (var i = 0; i < grid.length; i++) {
                flag[i].style.visibility = "hidden";
            }
            showCountries();
        }

        function showCountries() {
            var countryList = document.getElementById("countrylist");
            var countryId = "";
            var whichNumber = "";

            countryList.innerHTML = "";
            allFlags.sort(() => 0.5 - Math.random());

            for (var i = 0; i < allFlags.length; i++) {
                countryId = allFlags[i];
                whichNumber = (i + 1) + ". ";
                countryList.innerHTML += '<div id="' + countryId + '">' +
                whichNumber + allFlags[i] + '</div>' + '<br><br>';
            }
            countryList.style.color = "#a6b1c1";
            countryList.childNodes[0].style.color = "#000";
        }

        window.onClick = function() {
            for (var i = 0; i < grid.length; i++) {
                grid[i].addEventListener("click", function(e) {
                    window.clicks++;
                    checkCorrect(e);
                });
            }
        };

        function checkCorrect(e) {
            var clickTarget = e.target;
            var hiddenFlag = clickTarget.childNodes[0];
            var correctAnswer = document.getElementById("countrylist");

            if (window.clicks === 1) {
                hiddenFlag.style.visibility = "visible";
                console.log("You clicked on " + hiddenFlag.id);
                console.log("The correct answer is: " + correctAnswer.childNodes[0].id);
                if (hiddenFlag.id === correctAnswer.childNodes[0].id) {
                    addPoints();
                    correctAnswer.childNodes[0].style.color = "#49d134";
                    correctAnswer.childNodes[3].style.color = "#000";
                } else {
                    console.log("You answered incorrectly, you have a total of " +
                    window.testPoints3 + " points.");
                    correctAnswer.childNodes[0].style.color = "#c61111";
                    console.log("points " + window.testPoints3 + "answerCorrect " +
                    window.answerCorrect);
                    continueButtonWrong();
                }
            } else if (window.clicks === 2 && window.answerCorrect === 1) {
                hiddenFlag.style.visibility = "visible";
                console.log("You clicked on " + hiddenFlag.id);
                console.log("The correct answer is: " + correctAnswer.childNodes[3].id);
                if (hiddenFlag.id === correctAnswer.childNodes[3].id) {
                    addPoints();
                    correctAnswer.childNodes[3].style.color = "#49d134";
                    correctAnswer.childNodes[6].style.color = "#000";
                } else {
                    console.log("You answered incorrectly, you have a total of " +
                    window.testPoints3 + " points.");
                    correctAnswer.childNodes[3].style.color = "#c61111";
                    console.log("clicks: " + window.clicks + ", answerCorrect: " +
                    window.answerCorrect);
                    continueButtonWrong();
                }
            } else if (window.clicks === 3 && window.answerCorrect === 2) {
                hiddenFlag.style.visibility = "visible";
                console.log("You clicked on " + hiddenFlag.id);
                console.log("The correct answer is: " + correctAnswer.childNodes[6].id);
                if (hiddenFlag.id === correctAnswer.childNodes[6].id) {
                    addPoints();
                    correctAnswer.childNodes[6].style.color = "#49d134";
                    correctAnswer.childNodes[9].style.color = "#000";
                } else {
                    console.log("You answered incorrectly, you have a total of " +
                    window.testPoints3 + " points.");
                    correctAnswer.childNodes[6].style.color = "#c61111";
                    continueButtonWrong();
                }
            } else if (window.clicks === 4 && window.answerCorrect === 3) {
                hiddenFlag.style.visibility = "visible";
                console.log("You clicked on " + hiddenFlag.id);
                console.log("The correct answer is: " + correctAnswer.childNodes[9].id);
                if (hiddenFlag.id === correctAnswer.childNodes[9].id) {
                    addPoints();
                    correctAnswer.childNodes[9].style.color = "#49d134";
                    correctAnswer.childNodes[12].style.color = "#000";
                } else {
                    console.log("You answered incorrectly, you have a total of " +
                    window.testPoints3 + " points.");
                    correctAnswer.childNodes[9].style.color = "#c61111";
                    continueButtonWrong();
                }
            } else if (window.clicks === 5 && window.answerCorrect === 4) {
                hiddenFlag.style.visibility = "visible";
                console.log("You clicked on " + hiddenFlag.id);
                console.log("The correct answer is: " + correctAnswer.childNodes[12].id);
                if (hiddenFlag.id === correctAnswer.childNodes[12].id) {
                    addPoints();
                    correctAnswer.childNodes[12].style.color = "#49d134";
                    correctAnswer.childNodes[15].style.color = "#000";
                } else {
                    console.log("You answered incorrectly, you have a total of " +
                    window.testPoints3 + " points.");
                    correctAnswer.childNodes[12].style.color = "#c61111";
                    continueButtonWrong();
                }
            } else if (window.clicks === 6 && window.answerCorrect === 5) {
                hiddenFlag.style.visibility = "visible";
                console.log("You clicked on " + hiddenFlag.id);
                console.log("The correct answer is: " + correctAnswer.childNodes[15].id);
                if (hiddenFlag.id === correctAnswer.childNodes[15].id) {
                    addPoints();
                    correctAnswer.childNodes[15].style.color = "#49d134";
                    correctAnswer.childNodes[18].style.color = "#000";
                } else {
                    console.log("You answered incorrectly, you have a total of " +
                    window.testPoints3 + " points.");
                    correctAnswer.childNodes[15].style.color = "#c61111";
                    continueButtonWrong();
                }
            } else if (window.clicks === 7 && window.answerCorrect === 6) {
                hiddenFlag.style.visibility = "visible";
                console.log("You clicked on " + hiddenFlag.id);
                console.log("The correct answer is: " + correctAnswer.childNodes[18].id);
                if (hiddenFlag.id === correctAnswer.childNodes[18].id) {
                    addPoints();
                    correctAnswer.childNodes[18].style.color = "#49d134";
                    correctAnswer.childNodes[21].style.color = "#000";
                } else {
                    console.log("You answered incorrectly, you have a total of " +
                    window.testPoints3 + " points.");
                    correctAnswer.childNodes[18].style.color = "#c61111";
                    continueButtonWrong();
                }
            } else if (window.clicks === 8 && window.answerCorrect === 7) {
                hiddenFlag.style.visibility = "visible";
                console.log("You clicked on " + hiddenFlag.id);
                console.log("The correct answer is: " + correctAnswer.childNodes[21].id);
                if (hiddenFlag.id === correctAnswer.childNodes[21].id) {
                    addPoints();
                    correctAnswer.childNodes[21].style.color = "#49d134";
                    correctAnswer.childNodes[24].style.color = "#000";
                } else {
                    console.log("You answered incorrectly, you have a total of " +
                    window.testPoints3 + " points.");
                    correctAnswer.childNodes[21].style.color = "#c61111";
                    continueButtonWrong();
                }
            } else if (window.clicks === 9 && window.answerCorrect === 8) {
                hiddenFlag.style.visibility = "visible";
                console.log("You clicked on " + hiddenFlag.id);
                console.log("The correct answer is: " + correctAnswer.childNodes[24].id);
                if (hiddenFlag.id === correctAnswer.childNodes[24].id) {
                    addPoints();
                    correctAnswer.childNodes[24].style.color = "#49d134";
                    continueButtonWinner();
                } else {
                    console.log("You answered incorrectly, you have a total of " +
                    window.testPoints3 + " points.");
                    correctAnswer.childNodes[24].style.color = "#c61111";
                    continueButtonWrong();
                }
            }
        }

        function addPoints() {
            window.testPoints3++;
            window.answerCorrect++;
            console.log("You answered correctly. You have " + window.testPoints3 + " points.");
        }

        function continueButtonWrong() {
            content.innerHTML += '<div class="continue"><p>Wrong answer</p>\n' +
            '<button type ="button" id="button">Click here to continue</button></div>';
            document.getElementsByTagName("button")[0].addEventListener("click", showResult);
        }

        function continueButtonWinner() {
            content.innerHTML += '<div class="continue"><p>Good job, you \n' +
            'answered correctly on all of them!</p><button type ="button"\n' +
            ' id="button">Click here to continue</button></div>';
            document.getElementsByTagName("button")[0].addEventListener("click", showResult);
        }

        function showResult() {
            window.inTest3 = false;
            content.innerHTML = '<div class="introduction"><h3>Memory test\n' +
            '</h3><br><p>Your points: ' + window.testPoints3 + '\n' +
            '</p><p>Maximum amount of points: ' + allFlags.length + '</p>\n' +
            '<button type="button">Click here to continue</button></div>';
            window.points += window.testPoints3;
            document.getElementsByTagName("button")[0].addEventListener("click", window.endResult);
        }

        window.shuffle = function() {
            window.flagArray.sort(() => 0.5 - Math.random());
            window.flagArray.forEach(function(item, i) {
                grid[i].innerHTML += item;
            });
        };
        window.shuffle();
        window.onClick();
    };
}());
