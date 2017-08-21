function flip(word, pivot) {
  return word.slice(pivot) + word.slice(0, pivot) + 'ay';
}

function translate(str) {

  if (str.includes(" ")) {
    return str.split(" ").map(translate).join(" ");
  }

  if ("squ.sch.thr".includes(str.slice(0,3))) {
    return flip(str, 3);
  }

  if ("qu.ch.br.th".includes(str.slice(0,2))) {
    return flip(str, 2);
  }

  if ("aeiou".includes(str[0])) {
    return str + 'ay';
  }

  return str.slice(1) + str[0] + 'ay'; 
}
