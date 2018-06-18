function theBeatlesPlay(musicians, instruments) {
  let array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  let shoutedFacts = [];
  
  var i = 0;
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push("I love the Beatles!");
    n++;
  }
  while (n < 15);
  return array;
}