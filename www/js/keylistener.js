let previousKey;
document.onkeyup=function(e){
  //TODO make things happen, also cooperate with keydown
  console.log(e.code);
  previousKey = '';
}

document.onkeydown=function(e) {
  if (previousKey == e.code) {
    return;
  } else {
    //TODO make things happen
    console.log(e.code);
    previousKey = e.code;
  }
}
