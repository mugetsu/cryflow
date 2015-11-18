/*!
* cryflow
* (/ˌcryptˈflow/) show off words in a cryptic manner
* https://github.com/mugetsu/cryflow
* @author Randell Quitain
* @version 1.0.0
* Copyright 2015. MIT licensed.
*/

var cryflow = cryflow || {};

(function($){

    cryflow = {
        interval: null,
        breacher: null,
        figurer: null,
        count: 0,
        characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        element: "",
        prediction: "",
        init: function (element, words, timeout) {

            // set target element
            cryflow.element = element;

            function start() {

                // get random words
                cryflow.pick(words);

                // break words
                cryflow.breach(words, timeout);

            };

            // update word every x seconds
            cryflow.interval = setInterval(function() {

                start();

                console.log('interval');

            }, timeout);

        },
        pick: function (words) {

            var pick = words[Math.floor(Math.random() * (words.length - 1))];
            
            cryflow.prediction = pick;

        },
        breach: function (words, timeout) {

            var text = document.getElementById(cryflow.element),
                splitTimeout = timeout / text.innerHTML.length;

            cryflow.pick(words);
            
            // start breaching
            cryflow.breacher = setInterval(function() {

                if(cryflow.prediction.length > text.innerHTML.length) {

                    // reset timeouts
                    clearTimeout(cryflow.breacher);
                    clearTimeout(cryflow.interval);

                    var fillup,
                        fillupTimeout = timeout / text.innerHTML.length;

                    fillup = setInterval(function() {

                        if(text.innerHTML.length != cryflow.prediction.length) {
                        
                            text.innerHTML += cryflow.characters.charAt(Math.floor(Math.random() * cryflow.characters.length));

                        } else {

                            // reset timeouts
                            clearTimeout(fillup);
                            clearTimeout(cryflow.breacher);
                            clearTimeout(cryflow.interval);

                            // get random words
                            cryflow.pick(words);

                            // break words
                            cryflow.breach(words, timeout);

                        }

                        console.log('fillup');

                    }, fillupTimeout);

                } else {

                    text.innerHTML = text.innerHTML.substring(0, cryflow.count) + cryflow.characters.charAt(Math.floor(Math.random() * cryflow.characters.length)) + text.innerHTML.substring(cryflow.count + 1);

                    cryflow.count = (cryflow.count + 1) % text.innerHTML.length;

                    if(cryflow.count >= (cryflow.prediction.length - 1)) {

                        cryflow.figure(words, timeout);

                    }

                }

                console.log('breacher');

            }, splitTimeout);

        },
        figure: function (words, timeout) {

            // reset timeouts
            clearTimeout(cryflow.breacher);
            clearTimeout(cryflow.interval);

            // console.log(cryflow.count);

            var text = document.getElementById(cryflow.element),
                splitTimeout = timeout / cryflow.prediction.length,
                predicted_length = cryflow.prediction.length;

            console.log(text.innerHTML + ' -> ' + cryflow.prediction);

            // start figuring
            cryflow.figurer = setInterval(function() {

                if(cryflow.prediction.length > text.innerHTML.length) {

                    text.innerHTML = text.innerHTML.substring(0, predicted_length) + cryflow.prediction.charAt(predicted_length - 1) + text.innerHTML.substring(predicted_length + 1);

                    predicted_length++;

                    cryflow.count = (cryflow.count + 1) % text.innerHTML.length;

                    console.log(predicted_length +', '+ cryflow.prediction.length);

                    if(predicted_length === cryflow.prediction.length) {

                        // reset timeouts
                        clearTimeout(cleanup);
                        clearTimeout(cryflow.breacher);
                        clearTimeout(cryflow.interval);

                        // get random words
                        cryflow.pick(words);

                        // break words
                        cryflow.breach(words, timeout);

                    }

                } else {

                    text.innerHTML = text.innerHTML.substring(0, predicted_length) + cryflow.prediction.charAt(predicted_length - 1) + text.innerHTML.substring(predicted_length + 1);

                    predicted_length--;

                    cryflow.count = (cryflow.count + 1) % text.innerHTML.length;

                    if(predicted_length < 0) {

                        var cleanup,
                            cleanupTimeout = timeout / text.innerHTML.length;

                        cleanup = setInterval(function() {

                            if(text.innerHTML.length != cryflow.prediction.length) {

                                // remove last character in a string
                                text.innerHTML = text.innerHTML.substring(0, cryflow.prediction.length) + '' + text.innerHTML.substring(cryflow.prediction.length + 1);

                            } else {

                                // reset timeouts
                                clearTimeout(cleanup);
                                clearTimeout(cryflow.breacher);
                                clearTimeout(cryflow.interval);

                                // get random words
                                cryflow.pick(words);

                                // break words
                                cryflow.breach(words, timeout);

                            }

                            console.log('cleanup');

                        }, cleanupTimeout);

                        clearTimeout(cryflow.figurer);

                    }

                }

                console.log('figurer');

            }, splitTimeout);

        }
    };

    // on load
    (function($){

        // prerequisites, word timeout and array of words
        var wordTimeout = 1500,
            word_array = [
                "front-end",
                "playstation",
                "node",
                "grunt",
                "bower",
                "webdriver",
                "mocha",
                "chai",
                "socket",
                "jquery",
                "angular",
                "elasticsearch",
                "express",
                "html5",
                "css3",
                "foundation",
                "bootstrap"
            ];

        // start cryflow
        cryflow.init('text', word_array, wordTimeout);

    })();

})();