// add solution here
const theBeatlesPlay = (musicians, instruments) =>{
  let result = [];
  for (let i = 0; i < musicians.length; i++){
    result[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return result;
}

const johnLennonFacts = facts => {
  let i = 0;
  let result = [];
  while(i<facts.length){
    result[i] = `${facts[i]}!!!`;
<<<<<<< HEAD
    i++;
  }
  return result;
}

const iLoveTheBeatles = num => {
  let result = [];
  const limit = (num < 15) ? num + 1 : 1;
  let i = 0;
  do {
    result[i]='I love the Beatles!';
    i++
  }
  while(i < limit);
  return result;
=======
  }
  return result;
>>>>>>> f97f343d91d2e53cbfa9ed12f7ca3129387d052e
}