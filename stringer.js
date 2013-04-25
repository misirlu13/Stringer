/* Plugin:          Stringer                                        */
/* Author:          Bradley Drake                                   */
/* Version:         v1.1                                            */
/* Description:     Methods used to manipulate strings              */
/* Documentation:   https://github.com/misirlu13/Stringer.git       */
/* License:         Apache License, Version 2.0 (the "License")     */



//Global Variable used to store the DOM element that the string came from
var stringNode = null;

//Used to find the DOM element the string came from
function getStringParent(string) {
    var all = document.getElementsByTagName("*");

    for (var i = 0, max = all.length; i < max; i++) {
        if (all[i].innerHTML == string) {
            stringNode = all[i];
            return true;
        }
    }
}

//Escapes regex characters if passed in a function
function escapeRegExChars(x) {
    var escVal = ['\\', '.', '+', '*', '?', '^', '$', '[', ']', '(', ')', '|', '{', '}', '/', '\'', '#'];
    var strArray = x.split("");
    var escString;

    for (i = 0; i < strArray.length; i++) {
        for (j = 0; j < escVal.length; j++) {
            if (strArray[i] == escVal[j]) {
                strArray[i] = '\\' + strArray[i];
            }
        }
    }

    for (i = 0; i < strArray.length; i++) {
        escString += strArray[i];
    }
    return escString;
}

/****************************************************************************
Trims leading and trailing whitespace, returns, new lines, and tab characters

Use Case:

$('#test').text.trim();

document.getElementById('test').innerHTML.trim();

var test = '          This is my test string        ';
var newTest = test.trim();
****************************************************************************/
if(!String.prototype.trimString){
    function trimString() {
        var string = this.toString();
        var regEx = new RegExp(/^\s+|\s+$/g);

        if (stringNode == null) {
            getStringParent(string);
        }

        string = string.replace(regEx, '');
        (stringNode != null ? stringNode.innerHTML = string : '');

        return string;
    }
    String.prototype.trimString = trimString;
}

/****************************************************************************
Removes the tailing character specified by the parameter

Use Case:

$('#test').text.removeTrailing('g');

document.getElementById('test').innerHTML.removeTrailing('g');

var test = 'This is my test string';
var newTest = test.removeTrailing('g');
****************************************************************************/
if(!String.prototype.removeTrailing) {
    function removeTrailing(x) {
        x = escapeRegExChars(x);

        var string = this.toString();
        var stringReg = '/[' + x + ']$/';
        var endReg = new RegExp(/[\r\t\n\s]+$/);
        var endPadding = string.match(endReg);

        if (stringNode == null) {
            getStringParent(string);
        }

        string = string.replace(endReg, '');
        string = string.replace(eval(stringReg), '');
        string = string + (endPadding != null ? endPadding : '');
        (stringNode != null ? stringNode.innerHTML = string : '');
        stringNode = null;

        return string;

    }
    String.prototype.removeTrailing = removeTrailing;
}

/****************************************************************************
Removes the leading character specified by the parameter

Use Case:

$('#test').text.removeLeading('T');

document.getElementById('test').innerHTML.removeLeading('T');

var test = 'This is my test string';
var newTest = test.removeLeading('T');
****************************************************************************/
if(!String.prototype.removeLeading) {
    function removeLeading(x) {
        x = escapeRegExChars(x);

        var string = this.toString();
        var stringReg = '/^[' + x + ']/';
        var startReg = new RegExp(/^[\s\r\t\n]+/);
        var startPadding = string.match(startReg);

        if (stringNode == null) {
            getStringParent(string);
        }

        string = string.replace(startReg, '');
        string = string.replace(eval(stringReg), '');
        string = (startPadding != null ? startPadding : '') + string;
        (stringNode != null ? stringNode.innerHTML = string : '');
        stringNode = null;

        return string;
    }
    String.prototype.removeLeading = removeLeading;
}

/****************************************************************************
Boolean:  Checks to see if the string starts with the parameter

Use Case:

$('#test').text.beginsWith('T');

document.getElementById('test').innerHTML.beginsWith('T');

var test = 'This is my test string';
var newTest = test.beginsWith('T');
****************************************************************************/
if(!String.prototype.beginsWith) {
    function beginsWith(x) {
        x = escapeRegExChars(x);

        var string = this.toString();
        var stringReg = '/^' + x + '/';
    
        return (string.match(eval(stringReg)) ? true : false);
    }
    String.prototype.beginsWith = beginsWith;
}

/****************************************************************************
Boolean:  Checks to see if the string ends with the parameter

Use Case:

$('#test').text.endsWith('g');

document.getElementById('test').innerHTML.endsWith('g');

var test = 'This is my test string';
var newTest = test.endsWith('g');
****************************************************************************/
if(!String.prototype.endsWith) {
    function endsWith(x) {
        x = escapeRegExChars(x);

        var string = this.toString();
        var stringReg = '/' + x + '$/';

        return (string.match(eval(stringReg)) ? true : false);
    }
    String.prototype.endsWith = endsWith;
}
/****************************************************************************
Boolean:  Checks to see if the parameter and string match

Use Case:

$('#test').text.compare('This is not my test string');

document.getElementById('test').innerHTML.compare('This is not my test string');

var test = 'This is my test string';
var newTest = test.compare('This is not my test string');
****************************************************************************/
if(!String.prototype.compare){
    function compare(x) {
        var string = this.toString();

        return (string === x ? true : false);
    }
    String.prototype.compare = compare;
}

/****************************************************************************
Boolean:  Checks to see if the string contains the parameter

Use Case:

$('#test').text.contains('test string');

document.getElementById('test').innerHTML.contains('test string');

var test = 'This is my test string';
var newTest = test.contains('test string');
****************************************************************************/
if(!String.prototype.contains){
    function contains(x) {
        x = escapeRegExChars(x);

        var string = this.toString();
        var stringReg = '/' + x + '/';

        return (string.match(eval(stringReg)) ? true : false);
    }
    String.prototype.contains = contains;
}
/****************************************************************************
Returns the index of the parameter

Use Case:

$('#test').text.findString('This');

document.getElementById('test').innerHTML.findString('This');

var test = 'This is my test string';
var newTest = test.findString('This');
****************************************************************************/
if(!String.prototype.findString){
    function findString(x) {
        var string = this.toString();

        return string.indexOf(x);
    }
    String.prototype.findString = findString;
}
/****************************************************************************
Returns the character of the index provided by the parameter

Use Case:

$('#test').text.getString(6);

document.getElementById('test').innerHTML.getString(6);

var test = 'This is my test string';
var newTest = test.getString(6);
****************************************************************************/
if(!String.prototype.getString){
    function getString(x) {
        var string = this.toString();

        return string.charAt(x);
    }
    String.prototype.getString = getString;
}
/****************************************************************************
Boolean:  Checks to see if the character of the index provided by the 
parameter is lower case

Use Case:

$('#test').text.isLower(6);

document.getElementById('test').innerHTML.isLower(6);

var test = 'This is my test string';
var newTest = test.isLower(6);
****************************************************************************/
if(!String.prototype.isLower){
    function isLower(x) {
        var string = this.toString();

        return (string.charAt(x) !== string.charAt(x).toUpperCase() ? true : false);
    }
    String.prototype.isLower = isLower;
}
/****************************************************************************
Boolean:  Checks to see if the character of the index provided by the 
parameter is upper case

Use Case:

$('#test').text.isUpper(6);

document.getElementById('test').innerHTML.isUpper(6);

var test = 'This is my test string';
var newTest = test.isUpper(6);
****************************************************************************/
if(!String.prototype.isUpper){
    function isUpper(x) {
        var string = this.toString();

        return (string.charAt(x) === string.charAt(x).toUpperCase() ? true : false);
    }
    String.prototype.isUpper = isUpper;
}
/****************************************************************************
Gives padding in front of the string.  The number of "pads" given to the 
string is based on the length parameter, and the character that gives the 
padding is defaulted to whitespace, but can be passed as a parameter

Use Case:

$('#test').text.padLeading('6, '...');

document.getElementById('test').innerHTML.padLeading('6, '...');

var test = 'This is my test string';
var newTest = test.padLeading('6, '...');
****************************************************************************/
if(!String.prototype.padLeading){
    function padLeading(length, char) {
        var string = this.toString();
        var newString = '';
        var replaceChar = (char !== '' && typeof char !== 'undefined' ? char : ' ');

        if (stringNode == null) {
            getStringParent(string);
        }

        for (i = 0; i < length; i++) {
            newString += replaceChar;
        }

        (stringNode != null ? stringNode.innerHTML = newString + string : '');
        stringNode = null;


        return newString + string;;
    }
    String.prototype.padLeading = padLeading;
}
/****************************************************************************
Gives padding in the back  of the string.  The number of "pads" given to the 
string is based on the length parameter, and the character that gives the 
padding is defaulted to whitespace, but can be passed as a parameter

Use Case:

$('#test').text.padTrailing('6, '...');

document.getElementById('test').innerHTML.padTrailing('6, '...');

var test = 'This is my test string';
var newTest = test.padTrailing('6, '...');
****************************************************************************/
if(!String.prototype.padTrailing){
    function padTrailing(length, char) {
        var string = this.toString();
        var newString = '';
        var replaceChar = (char !== '' && typeof char !== 'undefined' ? char : ' ');

        if (stringNode == null) {
            getStringParent(string);
        }

        for (i = 0; i < length; i++) {
            newString += replaceChar;
        }

        (stringNode != null ? stringNode.innerHTML = string + newString : '');
        stringNode = null;

        return string + newString;
    }
    String.prototype.padTrailing = padTrailing;
}
/****************************************************************************
Reverses the string

Use Case:

$('#test').text.reverseString();

document.getElementById('test').innerHTML.reverseString();

var test = 'This is my test string';
var newTest = test.reverseString();
****************************************************************************/
if(!String.prototype.reverseString){
    function reverseString() {
        var string = this.toString();
        var strArray = string.split('');

        if (stringNode == null) {
            getStringParent(string);
        }

        (stringNode != null ? stringNode.innerHTML = strArray.reverse().join("") : '');
        stringNode = null;

        return strArray.reverse().join("");
    }
    String.prototype.reverseString = reverseString;
}
/****************************************************************************
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
****************************************************************************/
if(!String.prototype.merge){
    function merge(pos, newString) {
        var mod = (typeof inplace !== 'boolean' ? true : inplace);
        var string = this.toString();
        var strArray = string.split('');
        strArray.splice(pos, 0, newString);
        if (stringNode == null) {
            getStringParent(string);
        }

        (stringNode != null ? stringNode.innerHTML = strArray.join('') : '');
        stringNode = null;

        return strArray.join('');
    }
    String.prototype.merge = merge;
}
