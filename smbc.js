var casper = require('casper').create();

function getTitle(){
  this.echo(this.getElementsAttribute('#cc-comic', 'title'));
  this.click('#navbottom .nav a.prev[rel="prev"]');
  this.then(getTitle);
};

casper.start('http://smbc-comics.com/');

casper.then(getTitle);

casper.run();
