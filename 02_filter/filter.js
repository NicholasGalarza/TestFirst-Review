function filter (collection, predicate) {
  var result = [];
  for (let item of collection) {
    if (predicate(item)) result.push(item);
  }
  return result; 
}
