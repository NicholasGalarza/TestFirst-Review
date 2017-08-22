function rotater(str) {
  var reverse = false;
  return function(point) {
    if (reverse) {
      if (point >= str.length) reverse = false;
      return str.slice(-point) + str.slice(0, -point);
    } else {
      reverse = (point >= str.length);
      return str.slice(point) + str.slice(0, point);
    }
  }
}
