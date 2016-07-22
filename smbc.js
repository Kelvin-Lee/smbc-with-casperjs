var fs = require('fs'); // Not node fs, check phantomjs api fs module
var casper = require('casper').create();

var file = fs.open('./smbc.txt', 'w');

function getTitle(){
  var title = this.getElementsAttribute('#cc-comic', 'title');
  file.writeLine(title);
  this.echo(title);

  if (this.exists('#navbottom .nav a.prev[rel="prev"]')){
    this.click('#navbottom .nav a.prev[rel="prev"]');
    this.then(getTitle);
  } else {
    file.close();
    casper.exit();
  }
};

casper.start('http://smbc-comics.com/');
casper.then(getTitle);
casper.run();

