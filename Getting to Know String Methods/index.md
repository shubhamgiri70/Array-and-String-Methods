2 - `toUpperCase`

parameter - accepts no parameter - Return: a new string converted into uppercase.
return - A new string representing the calling string converted to upper case.
example -

```js
let name = "Shubham";
name.toUpperCase();
"SHUBHAM";
let house = "red";
house.toUpperCase();
"RED";
```

Description - The `toUpperCase` method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

3 - `toLowerCase`

parameter - accepts no parameter - Return: a new string converted into lowercase.
return - A new string representing the calling string converted to lower case.
example -

```js
let name = "Shubham";
name.toLowerCase();
"shubham";
let house = "Blue";
house.toLowerCase();
"blue";
```
Description - The toLowerCase() method returns the value of the string converted to lower case. 

4 - `trim`

parameter - accepts no parameter.
return - a new string representing string trimmed of the white space from its beginning and end. if there will be no space it will still return the same value in a string.
example - 

```js
let name = "  Shubham  ";
name.trim();
"shubham";
let house = " Blue ";
house.trim();
"blue";
```

description - trim method removes whitespace from both start and end of a string without changing the original content and return a new string.


5 - `trimEnd`

parameter - accepts no parameter.
return - a new string representing string trimmed of the white space from its end. if there will be no space it will still return the same value in a string.
example - 

```js
let name = "  Shubham  ";
name.trimEnd();
"  shubham";
let house = " Blue ";
house.trimEnd();
" blue";
```

Description - trimEnd method removes whitespace from end of a string without changing the original content and return a new string.


6 - `trimStart`

parameter - accepts no parameter.
return - a new string representing string trimmed of the white space from its beginning (left side). if there will be no space it will return the same value in a string.
example -

```js
let name = "  Shubham  ";
name.trimStart();
"shubham  ";
let house = " Blue ";
house.trimStart();
"blue ";
```
Description - trimStart method removes whitespace from start of a string without changing the original content and return a new string.


7 - `concat`

parameter - one or more strings to concatenate.
return - a new string containing the combined text of the strings provided.
example - 

```js
let name = "Shubham";
let house = "Blue";

name.concat(' ', "Giri");
'Shubham Giri'

name.concat(' ', "your house is ", house);
'Shubham your house is Blue'
```
Descprition - The concat() function concatenates the string arguments to the calling string and returns a new string. Changes to the original string or the returned string don't affect the other.
If the arguments are not of the type string, they are converted to string values before concatenating.

8 - `endsWith`

parameter - The characters to be searched for at the end of str.
return - true if the given characters are found at the end of the string, including when searchString is an empty string; otherwise, false.
example - 

```js
let abtHouse = 'Shubham your house is Blue';

abtHouse.endsWith('Blue'); //
true
abtHouse.endsWith('Blue', 26) // 
true
abtHouse.endsWith('Shubham') // 
false
```
Description - endsWithThis method lets you determine whether or not a string ends with another string. This method is case-sensitive.returning true or false as appropriate.


9 - `includes`

parameter - (searchString) A string to be searched for within str. The position within the string at which to begin searching for searchString. (Defaults to 0.)
return - return: true if the search string is found anywhere within the given string; otherwise, false if not. 
example -

```js
let abtHouse = 'Shubham your house is Blue';

abtHouse.includes('your')
true
abtHouse.includes(' ')
true
abtHouse.includes('yes')
false
```

Description - includesmethod performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.This method lets you determine whether or not a string includes another string.

10 - `indexOf`

parameter - Substring to search for if there will be agruments it is undefined and returns 0.if substring is not found in the string it will return -1.
return - The index of the first occurrence of searchString found, or -1 if not found.
example - 

```js
let abtHouse = 'Shubham your house is Blue with capital b in it';

abtHouse.indexOf('b') // 
3
abtHouse.indexOf('in') //
42
abtHouse.indexOf('f') //
-1
```

Description - indexOfThe indexOf() method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the first occurrence of the specified substring. Given a second argument: a number, the method returns the first occurrence of the specified substring at an index greater than or equal to the specified number.


11 - `lastIndexOf`

parameter - Substring to search for if there will be agruments it is undefined and returns 0.if substring is not found in the string it will return -1.
return - The index of the first occurrence of searchString found, or -1 if not found.
example - 

```js
let abtHouse = 'Shubham your house is Blue with capital b in it';

abtHouse.lastIndexOf('b')
40
abtHouse.lastIndexOf('i')
45
abtHouse.lastIndexOf('f')
-1
```

Description - The lastIndexOf method, given one argument: a substring to search for, searches the entire calling string, and returns the index of the last occurrence of the specified substring. Given a second argument: a number, the method returns the last occurrence of the specified substring at an index less than or equal to the specified number.

12 - `padEnd`

parameter - (targetLength) The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
return - A String of the specified targetLength with the padString applied at the end of the current str. example -

```js
let name = "Shubham"
let house = "Blue"

name.padEnd(10, 'm')
'Shubhammmm'
house.padEnd(20)
'Blue                '
```

Description - padEndmethod pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.

13 - `padStart`

parameter - (targetLength) The length of the resulting string once the current str has been padded. If the value is lower than str.length, the current string will be returned as-is.
return - A String of the specified targetLength with the padString applied at the start of the current str. example - 

```js
let name = "Shubham"
let house = "Blue"

name.padStart(10, 'S')
'SSSShubham'
house.padStart(20)
'                Blue'
```

Description - padStart method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

14 - `repeat`

parameter - An integer between 0 and +Infinity, indicating the number of times to repeat the string.
return - A new string containing the specified number of copies of the given string. repeat count must be non-negative. RangeError: repeat count must be less than infinity and not overflow maximum string size.
example - 

```js
let house = "i\'m in Blue house"

house.repeat(5)

"i'm in Blue housei'm in Blue housei'm in Blue housei'm in Blue housei'm in Blue house"

let adr = house

adr.repeat(8)

"i'm in Blue housei'm in Blue housei'm in Blue housei'm in Blue housei'm in Blue housei'm in Blue housei'm in Blue housei'm in Blue house"
```

Description - repeat method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.

15 - `replace`

parameter - (substr) The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction. A string that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.
return - A new string, with some or all matches of a pattern replaced by a replacement. If pattern is a string, only the first occurrence will be replaced.
example - 

```js
let house = "i\'m in Blue house"

house.replace('Blue', 'Red')
"i'm in Red house"

let str = house
str.replace('o', 'a')
"i'm in Blue hause"
```

16 - `slice`

parameter - (beginIndex) The zero-based index at which to begin extraction. (number data type) (endIndex) The index of the first character to exclude from the returned substring.
return - A new string containing the extracted section of the string.(string data type).
example - 

```js
let house = "i\'m in Blue house"

house.slice(2, 10)
'm in Blu'
let str = house
str.slice(12, 40)
'house'
```

Description - The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

17 - `split`

parameter - separator The pattern describing where each split should occur. The separator can be a simple string or it can be a regular expression.
return -  An Array of strings, split at each point where the separator occurs in the given string.
example - 

```js
let house = "i\'m in Blue house"

house.split(' ')
["i'm", 'in', 'Blue', 'house']

let str = 'The quick brown fox jumps over the lazy dog.';
str.split(" ")
['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
str.split()
['The quick brown fox jumps over the lazy dog.']
```

Description - The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.

18 - `substring`

parameter - (indexStart) The index of the first character to include in the returned substring. (number data type) (indexEnd) The index of the first character to exclude from the returned substring.
return - A new string containing the specified part of the given string.
example - 

```js
let house = "i\'m in Blue house"
house.substring(3, 15)
' in Blue hou'
let str = 'The quick brown fox jumps over the lazy dog.';
str.substring(8)
'k brown fox jumps over the lazy dog.'
```
Description - The split() method returns the part of the string between the start and end indexes, or to the end of the string.
there is a little difference b/w substrin and slice is that if we provide number with (20,4) in substring it wii by deafult start with accesending order while in slice it doesn't work that way other diiferences id if we put (20, Nan) in substring NaN is considered a zero.