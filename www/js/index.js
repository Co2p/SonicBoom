var colours = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow black-text', 'amber black-text', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];
function randomColour() {
    return colours[Math.floor((Math.random() * colours.length))]
}

function keyClick(row, id) {
    $('"#c' + id + 'r' + row + '"').text(latestKey);
}

function keyRow(keyCount, rowId) {
    let html = '';
    const width = (100 / keyCount) - 0.5;
    for (let i = 0; i < keyCount; i++) {
        const button = $('<button id="c' + i + 'r' + rowId +'" onclick="keyClick(' + i + ',' + rowId + ').bind(this)" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-color--' + randomColour() + '" style="width:' + width + '%; margin-left: 0.25%; margin-right:0.25%"></button>').text(i);
        html += button[0].outerHTML;
    }
    return html;
}

let html = '<div>';
html += '<div class="mdl-grid">'
html += keyRow(13, 1);
html += '</div>'
html += '<div class="mdl-grid">'
html += keyRow(14, 2);
html += '</div>'
html += '<div class="mdl-grid">'
html += keyRow(14, 3);
html += '</div>'
html += '<div class="mdl-grid">'
html += keyRow(13, 4);
html += '</div>'
html += '<div class="mdl-grid">'
html += keyRow(14, 5);
html += '</div>'
html += '<div class="mdl-grid"><div class="mdl-cell mdl-cell--3">'
html += keyRow(3, 6);
html += '</div>'
html += '<div class="mdl-cell mdl-cell--7">'
html += keyRow(1, 6);
html += '</div>'
html += '<div class="mdl-cell mdl-cell--2">'
html += keyRow(2, 6);
html += '<div>'
html += '<div>'

html += '</div>';

$(".buttons").append(html);
