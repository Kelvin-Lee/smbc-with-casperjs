# SMBC Scraper 
A script that scrapes the smbc-comics.com website for the "secret text" and `extra-comic` of each comic.

## Prerequisite Installations
You'll have to install:

- [CasperJs](casperjs.org), which itself requires...
  - PhantomJS
  - Python

### Prerequisite Installation Notes
Some notes I found useful for the prerequisite installations. *(Note: I used `npm install -g phantomjs`, `git` for Casperjs, and a .msi for Python.)*
#### Windows
Symptom | Fix/Heplful Link
--------------------------
Running the `sample.js` script as provided on the casperjs.org site produces correct output, but (1) returns a new prompt immediately without output, and then (2) after returning output, doesn't exit. | [Reasoning](http://stackoverflow.com/questions/29392373/casperjs-script-never-exits) and [related helpful link](http://stackoverflow.com/questions/14894311/installing-casperjs-on-windows-how-to-do-it-correctly)

