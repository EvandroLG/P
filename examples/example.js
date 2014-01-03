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