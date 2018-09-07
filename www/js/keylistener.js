let previousKey;
let keyRow = 1;

document.onkeyup=function(e){
    //TODO make things happen, also cooperate with keydown
    console.log(e.code);
    previousKey = '';
}

document.onkeydown=function(e) {
    if (previousKey == e.keyCode) {
        return;
    } else {
        previousKey = e.keyCode;
        if (!keys[previousKey]) {
            let newKey = new key(e, 'ide2.wav');
            keys[previousKey] =  newKey;
            addButton(previousKey, keyRow)
        } else {
            keyRow++;
        }
        loadSound('ide2.wav', previousKey);
        playSound(previousKey);
        //TODO make things happen
        console.log(previousKey);
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
