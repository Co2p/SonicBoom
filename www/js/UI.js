function initUI() {
 load('keylayout/SE_mac.json', function(response) {
    var jsonLayout = JSON.parse(response);
    $('.keyboard').append(buildUI(jsonLayout));
 });
}

function buildUI(jsonLayout) {
  var keytable = '<div>';
  for(i in jsonLayout.rows) {
    let row = jsonLayout.rows[i];
    let tableRow = '<div>';
    for(j in row) {
      tableRow += buildButton(row[j]);
    }
    tableRow += '</div>';
    keytable += tableRow;
  }
  keytable += '</div>'
  return keytable
}

function buildButton(key) {
  let className = "mdl-cell mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect button-key";
  let prop = '';
  if (key.class != 'undefined') {
    className += " " + key.class;
  }
  if (key.prop === 'disabled') {
    //prop += " " + key.prop;
    className += " mdl-button--colored mdl-color--red";
  }
  return '<button class="' + className + '" id="' + key.ID + '" ' + prop + '>' + key.name + '<p class="description">' + 'description' + '</p></button>';
}


function load(file, callback) {

   var xobj = new XMLHttpRequest();
       xobj.overrideMimeType("application/json");
   xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         }
   };
   xobj.send(null);
}
