var colours = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow black-text', 'amber black-text', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];
var lightness = ['darken-4 waves-light', 'darken-3 waves-light', 'darken-2 waves-light', 'darken-1 waves-light', 'waves-light', 'lighten-1 waves-light', 'lighten-2 black-text', 'lighten-3 black-text', 'lighten-4 black-text', 'lighten-5 black-text'];
function randomColour() {
    return colours[Math.floor((Math.random() * colours.length))] + ' ' + lightness[Math.floor((Math.random() * lightness.length))]
}

function seqColour(int1, int2) {
    while (int1 >= colours.length) {
        int1 = int1 - colours.length;
    }
    while (int2 >= lightness.length) {
        int2 = int2 - lightness.length;
    }
    return colours[int1] + ' ' + lightness[int2]
}

function keyClick(row, id) {
    $('"#c' + id + 'r' + row + '"').text(latestKey);
}

function keyRow(keyCount, rowId) {
    let html = '<div class="row">';
    const width = (100 / keyCount) - 0.5;
    for (let i = 0; i < keyCount; i++) {
        const button = $('<button id="c' + i + 'r' + rowId +'" onclick="keyClick(' + i + ',' + rowId + ').bind(this)" class="waves-effect btn ' + seqColour(rowId, i) + '" style="width:' + width + '%; margin-left: 0.25%; margin-right:0.25%"></button>').text(i);
        html += button[0].outerHTML;
    }
    html += '</div>';
    return html;
}

let html = '<div>';

html += keyRow(13, 1);
html += keyRow(14, 2);
html += keyRow(14, 3);
html += keyRow(13, 4);
html += keyRow(14, 5);
html += keyRow(8, 6);

html += '</div>';

$(".buttons").append(html);
