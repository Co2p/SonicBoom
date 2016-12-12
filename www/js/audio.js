// Source: https://www.html5rocks.com/en/tutorials/webaudio/intro/
var context;
var audioBuffers = new Hash(); //Hashtable with buffers
window.addEventListener('load', initAudio, false);

function initAudio() {
  try {
    // Fix up for prefixing
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    context = new AudioContext();
    console.log('audio init done');
  }
  catch(e) {
    alert('Web Audio API is not supported in this browser');
  }
}

function playSound(id) {
  var source = context.createBufferSource(); // creates a sound source
  source.buffer = audioBuffers[id];                    // tell the source which sound to play
  source.connect(context.destination);       // connect the source to the context's destination (the speakers)
  source.start(0);                           // play the source now
                                             // note: on older systems, may have to use deprecated noteOn(time);
}

function loadSound(url, id) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      audioBuffers[id] = buffer;
    }, onError);
  }
  request.send();
}
