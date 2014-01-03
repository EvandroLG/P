# P
It's an agnostic, cross-browser and very lightweight library to help you to work with Promise in JavaScript.

## Browser Compatibility
P is compatible with the following browsers/versions:
* Google Chrome
* Firefox
* Safari
* IOS Safari
* Opera
* IE 7+

## Methods
* P.init().<code>resolve(params)</code>
* P.init().<code>reject(params)</code>
* P.init().<code>reject(callback)</code>

**Example**
```js
var ajax = function(url) {
    var httpRequest = new XMLHttpRequest();
    var p = P.init();

    httpRequest.addEventListener('load', function() {
    	if (httpRequest.status === 400) {
    		p.reject();
    		return;
    	}

    	p.resolve();
        
    }, false);

    httpRequest.open('GET', url, true);
    httpRequest.send();
};

ajax("ajax.html").then(
	function() {
		console.log('success!!!');
	},

	function() {
		console.log('error!');
	}
);
```