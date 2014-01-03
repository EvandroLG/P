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
* P.init().<code>then(callback)</code>

**Example**
```js
var context = {name: 'Evandro', year: 27};
var p = P.init(context);

window.load = function(delay) {
  setTimeout(function(){
    p.resolve();
  }, delay);

  return p;
};

window.load(200).then(function() {
  console.log('name = ', this.name);
  console.log('year = ', this.year);
});
```