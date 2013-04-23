Plugin:          Stringer                                        
Author:          Bradley Drake                                  
Version:         v1.0                                            
Description:     Methods used to manipulate strings              
Documentation:   https://github.com/misirlu13/Stringer.git       
License:         Apache License, Version 2.0 (the "License")    



This plugin works with and without jQuery, and even though I have not tested it 
with any other JavaScript library's, I am sure it will work just as well with 
them.  The main thing to remember is to always pass a string to the method, or
if it is a JavaScript library such as jQuery, to pass a string method, such as
text() to the Stringer method so that the Stringer method can convert the 
string object the library passed into a string so that it can be manipulated.


Trims leading and trailing whitespace, returns, new lines, and tab characters

Use Case:

$('#test').text.trim();

document.getElementById('test').innerHTML.trim();

var test = '          This is my test string        ';
var newTest = test.trim();




Removes the tailing character specified by the parameter

Use Case:

$('#test').text.removeTrailing('g');

document.getElementById('test').innerHTML.removeTrailing('g');

var test = 'This is my test string';
var newTest = test.removeTrailing('g');




Removes the leading character specified by the parameter

Use Case:

$('#test').text.removeLeading('T');

document.getElementById('test').innerHTML.removeLeading('T');

var test = 'This is my test string';
var newTest = test.removeLeading('T');




Boolean:  Checks to see if the string starts with the parameter

Use Case:

$('#test').text.beginsWith('T');

document.getElementById('test').innerHTML.beginsWith('T');

var test = 'This is my test string';
var newTest = test.beginsWith('T');




Boolean:  Checks to see if the string ends with the parameter

Use Case:

$('#test').text.endsWith('g');

document.getElementById('test').innerHTML.endsWith('g');

var test = 'This is my test string';
var newTest = test.endsWith('g');




Boolean:  Checks to see if the parameter and string match

Use Case:

$('#test').text.compare('This is not my test string');

document.getElementById('test').innerHTML.compare('This is not my test string');

var test = 'This is my test string';
var newTest = test.compare('This is not my test string');




Boolean:  Checks to see if the string contains the parameter

Use Case:

$('#test').text.contains('test string');

document.getElementById('test').innerHTML.contains('test string');

var test = 'This is my test string';
var newTest = test.contains('test string');




Returns the index of the parameter

Use Case:

$('#test').text.findString('This');

document.getElementById('test').innerHTML.findString('This');

var test = 'This is my test string';
var newTest = test.findString('This');




Returns the character of the index provided by the parameter

Use Case:

$('#test').text.getString(6);

document.getElementById('test').innerHTML.getString(6);

var test = 'This is my test string';
var newTest = test.getString(6);




Boolean:  Checks to see if the character of the index provided by the 
parameter is lower case

Use Case:

$('#test').text.isLower(6);

document.getElementById('test').innerHTML.isLower(6);

var test = 'This is my test string';
var newTest = test.isLower(6);




Boolean:  Checks to see if the character of the index provided by the 
parameter is upper case

Use Case:

$('#test').text.isUpper(6);

document.getElementById('test').innerHTML.isUpper(6);

var test = 'This is my test string';
var newTest = test.isUpper(6);




Gives padding in front of the string.  The number of "pads" given to the 
string is based on the length parameter, and the character that gives the 
padding is defaulted to whitespace, but can be passed as a parameter

Use Case:

$('#test').text.padLeading('6, '...');

document.getElementById('test').innerHTML.padLeading('6, '...');

var test = 'This is my test string';
var newTest = test.padLeading('6, '...');




Gives padding in the back  of the string.  The number of "pads" given to the 
string is based on the length parameter, and the character that gives the 
padding is defaulted to whitespace, but can be passed as a parameter

Use Case:

$('#test').text.padTrailing('6, '...');

document.getElementById('test').innerHTML.padTrailing('6, '...');

var test = 'This is my test string';
var newTest = test.padTrailing('6, '...');





Reverses the string

Use Case:

$('#test').text.reverseString();

document.getElementById('test').innerHTML.reverseString();

var test = 'This is my test string';
var newTest = test.reverseString();




Merge the original string with a new string as a specified location based on 
the pos parameter, which is the index of location you would like the string 
to be merged at, and the newstring parameter, which is the string you would 
like to merge with the original string

***Remember to add white spacing if needed***

Use Case:

$('#test').text.merge(11, 'spanking new');

document.getElementById('test').innerHTML.merge(11, 'spanking new');

var test = 'This is my test string';
var newTest = test.merge(11, 'spanking new');






