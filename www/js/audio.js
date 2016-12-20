// Source: https://www.html5rocks.com/en/tutorials/webaudio/intro/
var audioContext = new AudioContext();
var audioBuffers = {}; //Hashtable with buffers
window.addEventListener('load', initAudio, false);

function initAudio() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    audioContext = new AudioContext();
    console.log('audio init done');
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}

function playSound(id) {
  if (audioBuffers[id] != undefined) {
    playSound(id, 0);
  } else {
    //TODO wait for audio to be defined + timeout
  }
}

function playSound(id, time) {
  console.log("playing id: " + id);
  var source = audioContext.createBufferSource(); // creates a sound source
  console.log(audioBuffers[id]);
  source.buffer = audioBuffers[id];                    // tell the source which sound to play
  source.connect(audioContext.destination);       // connect the source to the context's destination (the speakers)
  source.start(time);                           // play the source now from tile ( 0 )
  // note: on older systems, may have to use deprecated noteOn(time);
}

function loadSound(url, id) {
  console.log("loading id: " + id);
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = () => {
    audioContext.decodeAudioData(request.response, function(buffer) {
      audioBuffers[id] = buffer;
      console.log("loaded " + id);
    }, () => {console.log("oups, thats a audio error");});
  }
  request.send();
}
