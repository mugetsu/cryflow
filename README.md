Cryflow (/ˌcryptˈflow/)
========

Show off words in a cryptic manner

##Basic Usage:

'text' is the id of the element you want to use for cryflow.

```javascript
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
```

##Demo:

[Personal](http://randell.pancakeapps.com/)

