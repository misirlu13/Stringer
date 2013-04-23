/*                      STRINGER                        */
/* Author:          Bradley Drake                       */
/* Plugin:          Stringer                            */
/* Version:         v1.0                                */
/* Description:     Methods used to manipulate strings  */
/* Documentation:   www.torchdevelopment.com/stringer   */



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
function trim() {
    var string = this.toString();
    var beginTrim = new RegExp(/^[\s\r\t\n]+/);
    var endTrim = new RegExp(/[\s\r\t\n]+$/);

    if (stringNode == null) {
        getStringParent(string);
    }
    console.log(stringNode);
    string = string.replace(beginTrim, '');
    string = string.replace(endTrim, '');
    (stringNode != null ? stringNode.innerHTML = string : '');

    return string;
};

/****************************************************************************
Removes the tailing character specified by the parameter

Use Case:

$('#test').text.removeTrailing('g');

document.getElementById('test').innerHTML.removeTrailing('g');

var test = 'This is my test string';
var newTest = test.removeTrailing('g');
****************************************************************************/
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
};

/****************************************************************************
Removes the leading character specified by the parameter

Use Case:

$('#test').text.removeLeading('T');

document.getElementById('test').innerHTML.removeLeading('T');

var test = 'This is my test string';
var newTest = test.removeLeading('T');
****************************************************************************/
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

    return string
}

/****************************************************************************
Boolean:  Checks to see if the string starts with the parameter

Use Case:

$('#test').text.beginsWith('T');

document.getElementById('test').innerHTML.beginsWith('T');

var test = 'This is my test string';
var newTest = test.beginsWith('T');
****************************************************************************/
function beginsWith(x) {
    x = escapeRegExChars(x);

    var string = this.toString();
    var stringReg = '/^' + x + '/';
    
    return (string.match(eval(stringReg)) ? true : false);
}

/****************************************************************************
Boolean:  Checks to see if the string ends with the parameter

Use Case:

$('#test').text.endsWith('g');

document.getElementById('test').innerHTML.endsWith('g');

var test = 'This is my test string';
var newTest = test.endsWith('g');
****************************************************************************/
function endsWith(x) {
    x = escapeRegExChars(x);

    var string = this.toString();
    var stringReg = '/' + x + '$/';

    return (string.match(eval(stringReg)) ? true : false);
}

/****************************************************************************
Boolean:  Checks to see if the parameter and string match

Use Case:

$('#test').text.compare('This is not my test string');

document.getElementById('test').innerHTML.compare('This is not my test string');

var test = 'This is my test string';
var newTest = test.compare('This is not my test string');
****************************************************************************/
function compare(x) {
    var string = this.toString();

    return (string === x ? true : false);
}

/****************************************************************************
Boolean:  Checks to see if the string contains the parameter

Use Case:

$('#test').text.contains('test string');

document.getElementById('test').innerHTML.contains('test string');

var test = 'This is my test string';
var newTest = test.contains('test string');
****************************************************************************/
function contains(x) {
    x = escapeRegExChars(x);

    var string = this.toString();
    var stringReg = '/' + x + '/';

    return (string.match(eval(stringReg)) ? true : false);
}

/****************************************************************************
Returns the index of the parameter

Use Case:

$('#test').text.findString('This');

document.getElementById('test').innerHTML.findString('This');

var test = 'This is my test string';
var newTest = test.findString('This');
****************************************************************************/
function findString(x) {
    var string = this.toString();

    return string.indexOf(x);
}

/****************************************************************************
Returns the character of the index provided by the parameter

Use Case:

$('#test').text.getString(6);

document.getElementById('test').innerHTML.getString(6);

var test = 'This is my test string';
var newTest = test.getString(6);
****************************************************************************/
function getString(x) {
    var string = this.toString();

    return string.charAt(x);
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
function isLower(x) {
    var string = this.toString();

    return (string.charAt(x) !== string.charAt(x).toUpperCase() ? true : false);
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
function isUpper(x) {
    var string = this.toString();

    return (string.charAt(x) === string.charAt(x).toUpperCase() ? true : false);
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

    return newString + string;
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

/****************************************************************************
Reverses the string

Use Case:

$('#test').text.reverseString();

document.getElementById('test').innerHTML.reverseString();

var test = 'This is my test string';
var newTest = test.reverseString();
****************************************************************************/
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
function merge(pos, newString) {
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

//Extend Stringer functions to Javascript
String.prototype.trim = trim;
String.prototype.removeTrailing = removeTrailing;
String.prototype.removeLeading = removeLeading;
String.prototype.beginsWith = beginsWith;
String.prototype.endsWith = endsWith;
String.prototype.compare = compare;;
String.prototype.contains = contains;
String.prototype.findString = findString;
String.prototype.getString = getString;
String.prototype.isLower = isLower;
String.prototype.isUpper = isUpper;
String.prototype.padLeading = padLeading;
String.prototype.padTrailing = padTrailing;
String.prototype.reverseString = reverseString;
String.prototype.merge = merge;
