Cryflow (/ˌcryptˈflow/)
========

Show off words in a cryptic manner

##Basic Usage:

'text' is the id of the element you want to use for cryflow.

```javascript
// on load
(function($){

    // prerequisites, word timeout and array of words
    var wordTimeout = 1200,
        word_array = [
            "NodeJS",
            "GruntJS",
            "BowerIO",
            "WebDriver",
            "MochaJS",
            "ChaiJS",
            "SocketIO",
            "jQuery",
            "AngularJS",
            "ElasticSearch",
            "ExpressJS",
            "REST",
            "HTML5",
            "Jade",
            "CSS3",
            "SASS",
            "Git",
            "Foundation",
            "Bootstrap"
        ];

    // start cryflow
    cryflow.init('text', word_array, wordTimeout);

})();
```

##Demo:

[Personal](http://randell.pancakeapps.com/)

