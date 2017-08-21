function sometimes(func) {
  var count = 0;
  var foo = function(accum, current) {
    count++;
    return (count < 3 || count % 2 === 1) ?
              func.apply(func, arguments) :
              "I do not know!";
  }
  return foo;
}
