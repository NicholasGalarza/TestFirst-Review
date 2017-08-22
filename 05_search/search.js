
function search(func) {

  for (item of this) {
    if (Array.isArray(item) && search.call(item, func)) return true;
    if (func(item)) return true;
  }
  return false;
}
