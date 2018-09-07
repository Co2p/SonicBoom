"use-strict";
var  keys = {};
function initUI() {
    // $.getJSON('keylayout/SE_mac.json', function(json) {
    //     var jsonLayout = JSON.parse(response);
    //     $('.keyboard').append(buildUI(jsonLayout));
    //     console.log(jsonLayout);
    // });
    let keyboard = document.getElementsByClassName('keyboard')[0];
    for (var i = 0; i < 6; i++) {
        let div = document.createElement("div");
        div.id = 'keyrow' + (i + 1)
        div.className = 'keyrow';
        keyboard.appendChild(div);
    }

}

function addButton(keyID, row) {
    let className = "mdl-cell mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button-key";

    let key = keys[keyID];

    document.getElementById('keyrow' + row).innerHTML += '<button class="' + className + '" id="' + key.name + '">' + key.label + '<p class="description">' + 'description' + '</p></button>';
}

function key(event, sound) {
    console.log(event);
    this.name = event.keyCode;
    this.label = event.key;
    this.class = '';
    loadSound(sound, name);
    this.play = function () {
        playSound(name)
    }
}
