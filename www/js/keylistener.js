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
    loadSound('ide2.wav', e.code);
    playSound(e.code);
    //TODO make things happen
    console.log(e.code);
    previousKey = e.code;
  }
}

$("body").click((e) => {
  //checks that the clicked button is in the div with class "keyboard", this might break if the amount of divs are changed
  console.log(e.target.parentElement.parentElement.parentElement.parentElement.className === 'keyboard') {
    let keyClicked = e.target.parentElement.id;
    loadSound('ide2.wav', keyClicked);
    playSound(keyClicked);
  }
});
