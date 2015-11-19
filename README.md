Cryflow (/ˌcryptˈflow/)
========

Show off words in a cryptic manner

###Loop

`word -> random string (transition: left to right) -> word -> random string (transition: right to left)`

##Basic Usage:

'text' is the id of the element you want to use for cryflow.

###HTML

```html
<span id="text">init()</span>
```

```html
<!-- Add to HEAD or BEFORE CLOSE BODY TAG -->
<script src="cryflow.min.js"></script>
```

###Javascript

```javascript
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
```

##Demo:

[Sample](http://randell.pancakeapps.com/)

