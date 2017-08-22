function MyEventEmitter() {
  this.events = {};
}

MyEventEmitter.prototype.addListener = function(eventString, callback) {
  if (!this.events.hasOwnProperty(eventString)) {
    this.events[eventString] = [];
  }
  this.events[eventString].push(callback);
}

MyEventEmitter.prototype.emit = function(eName) {
  var values = [].slice.call(arguments, 1);

  this.events[eName].forEach(function(func, index) {
    // func(values[index]);
    func.apply(null, values[index]);
  });
}
