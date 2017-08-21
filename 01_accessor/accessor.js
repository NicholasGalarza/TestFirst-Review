function accessor(obj) {
  var getter = function(property, value) {
    return (value) ? obj[property] = value : obj[property];
  }
  return getter;
}
