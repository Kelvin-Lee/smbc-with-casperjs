var casper = require('casper').create();
casper.start('http://smbc-comics.com/');

casper.then(function(){
  this.echo(this.getElementsAttribute('#cc-comic', 'title'));
  this.click('#navbottom .nav a.prev[rel="prev"]');
});

casper.then(function(){
  this.echo(this.getElementsAttribute('#cc-comic', 'title'));
  this.click('#navbottom .nav a.prev[rel="prev"]');
});

casper.run();
