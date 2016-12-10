var colours = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow black-text', 'amber black-text', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];
function randomColour() {
    return colours[Math.floor((Math.random() * colours.length))]
}

initUI();
