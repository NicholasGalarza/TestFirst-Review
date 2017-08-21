function difference(arr1, arr2) {
  return arr1.filter(element => {
    if (arr2.indexOf(element) === -1) return element;
  });
}

function symmetricDiff(arr1, arr2) {
  return difference(arr1, arr2).concat(difference(arr2, arr1));  
}
