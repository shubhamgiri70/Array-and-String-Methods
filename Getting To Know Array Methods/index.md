1 - `concat`

Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
Return: a single Array consisting of by all the values passed as parameters in the same order.
Example:

```js
let numbers = [1, 2, 3];
numbers.concat(4); //[1,2,3,4]
let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
let colors = ['red', 'green', 'blue'];
colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
```

concat accepts n number of values and returns one array with all the values in same order. It does not change the original array.

No it does not mutate the original array

2 - `join`

Parameter: (separator) Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary. If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.
Return: A string with all array elements joined. If arr.length is 0, the empty string is returned.
Example: 

```js
const students = ["Aman", "Rajesh", "Rohan", "Stuvi"];

students.join()
'Aman,Rajesh,Rohan,Stuvi'
students.join('')
'AmanRajeshRohanStuvi'
students.join('-')
'Aman-Rajesh-Rohan-Stuvi'
```
- The `join`() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

No it does not mutate the original array.

3 - `flat`

Parameter: (depth(number)) The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
Return: A new array with the sub-array elements concatenated into it.
example:

```js
const students = ["Aman", "Rajesh", ["Rohan", "Stuvi"]];
students.flat()
(4) ['Aman', 'Rajesh', 'Rohan', 'Stuvi']

const arr = [1, 2, 4, [5, 9, 12, [14, 21, [,94]]]];
arr.flat()
[1, 2, 4, 5, 9, 12, Array(3)]
arr.flat(2)
[1, 2, 4, 5, 9, 12, 14, 21, Array(2)]
arr.flat(4)
[1, 2, 4, 5, 9, 12, 14, 21, 94]
```

The `flat`() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

no it doesn't mutate the original array.

4 - `push`

Parameter: ('elementN') The element(s) to add to the end of the array.
Return: The new length property of the object upon which the method was called.
Example:

```js
const sectionA = ["Aman", "Rajesh"];
const totalStudents = sectionA.push("Rajesh", "Piyush")
console.log(totalStudents)
4

console.log(sectionA)
(4) ['Aman', 'Rajesh', 'Rajesh', 'Piyush']

sectionA.push("Amrit", "Vinay")
console.log(sectionA)
(6) ['Aman', 'Rajesh', 'Rajesh', 'Piyush', 'Amrit', 'Vinay']

const sectionB = ["Vishal", "Rohan"];
sectionA.push(...sectionB)

console.log(sectionA)
(8) ['Aman', 'Rajesh', 'Rajesh', 'Piyush', 'Amrit', 'Vinay', 'Vishal', 'Rohan']

```

push method adds one or more elements to the end of an array and returns the new length of the array.

it does mutate the original array.

5 - `indexOf`

Parameter: (searchElement) Element to locate in the array. (fromIndex) if the provided index is negative, the array is still searched from front to back. If the provided index is 0, then the whole array will be searched. Default: 0
Return: The first index of the element in the array; -1 if not found.
Example:

```js
const sectionB = ["Vishal", "Rohan", "Vinay", "Aryan"];

sectionB.indexOf("Vinay")
2
sectionB.indexOf("Aryan", 2)
3
sectionB.indexOf("Rohit")
-1
```

indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.

the indexOf() method does not mutate the original array.

6 - `lastIndexOf`

Parameter: (searchElement) Element to locate in the array. (fromIndex) The position in the array at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), causing the whole array to be searched.
Return: The last index of the element in the array; -1 if not found.
Example:

```js
const sectionB = ["Vishal", "Rohan", "Vinay", "Aryan", "Rohan"];

sectionB.lastIndexOf("Rohan")
4

sectionB.lastIndexOf("Vinay")
2
```

`lastIndexOf` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.


7 - `includes`

Parameter: (from index) The position in this array at which to begin searching for searchElement.The first element to be searched is found at fromIndex for positive values of fromIndex, or for negative values of fromIndex
Return: A boolean value which is true if the value searchElement is found within the array.Values of zero are all considered to be equal, regardless of sign.
Example:

```js
let colorArr = ["Red", "White", "Orange"]

colorArr.includes("Orange")
true

const numArr = [1, 2, 4, 5, 9, 12, 14, 21, 94];

numArr.includes(21)
true
numArr.includes(81)
false
```

includes method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

No it does not mutate the original array


8 - `reverse`

parameter: it does not takes any parameter.
return - The reversed array.
Example:

```js
const numArr = [1, 2, 4, 5, 9, 12, 14, 21, 94];
numArr.reverse()
[94, 21, 14, 12, 9, 5, 4, 2, 1]
let colorArr = ["Red", "White", "Orange"]
colorArr.reverse()
['Orange', 'White', 'Red']
```

reverse method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

it does mutate the original array.

9 - `every`

Parameter: it accepts call back function. A function to test for each element.
Return: true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
Example:

```js
const numArr = [1, 2, 4, 5, 9, 12, 14, 21, 94];

let ret = numArr.every(function(num){
    return num > 0
})
ret
true

let ret = numArr.every(function(element, index, array){
    return element > 0
})
ret
true

let ret = numArr.every(function(element, index, array){
    return element > 100
})
ret
false
```

everymethod tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

No it does not mutate the original array

10 - `shift`

Parameter: shift()
Return: The removed element from the array; undefined if the array is empty.
Example:

```js
const numArr = [1, 2, 4, 5, 9, 12, 14, 21, 94];

numArr.shift()
1
numArr.shift(1)
2
```

`shift` a method removes the first element from an array and returns that removed element. This method changes the length of the array.

it does  mutate the original array.

11 - `splice`

Parameter: (deleteCount) An integer indicating the number of elements in the array to remove from start.

Return: An array containing the deleted elements.If only one element is removed, an array of one element is returned.If no elements are removed, an empty array is returned.
Example:

```js
let colorArr = ["Red", "White", "Orange", "Black"]

colorArr.splice(2, 1, "Green")

colorArr
['Red', 'White', 'Green', 'Black']
colorArr.splice(3, 0, "Pink", "Violet")

colorArr
['Red', 'White', 'Green', 'Pink', 'Violet', 'Black']
```

`splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().

it does mutate the original array

12 - `find`

Parameter: (callbackFn, element, index, array) The callback must return a truthy value to indicate a matching element has been found.
Return: The first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
Example:

```js
const numArr = [1, 2, 4, 5, 9, 12, 14, 21, 94];
function isFour(num) {
    return num === 4
}

console.log(numArr.find(isFour))
4

function isSix(num) {
    return num === 6
}

console.log(numArr.find(isSix))
undefined
```

find method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

13 - `unshift`

Parameter: (elementN) The elements to add to the front of the arr.
Return: The new length property of the object upon which the method was called.
Example:

```js
let colorArr = ["Red", "White", "Orange", "Black"]

colorArr.unshift("Blue")
5

colorArr
['Blue', 'Red', 'White', 'Orange', 'Black']
```
unshift method adds one or more elements to the beginning of an array and returns the new length of the array.
it does mutate the original array.

14 - `findIndex`

Parameter: (callbackFn, element, index, array) A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
Return: The index of the first element in the array that passes the test. Otherwise, -1.

Example:

```js
const numArr = [1, 2, 4, 5, 9, 12, 14, 21, 94];

function isFour(num) {
    return num === 4
}

let foundIndex = numArr.findIndex(isFour)

console.log(foundIndex)
2

```

findIndex method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

15 - `filter`

Parameter: (callbackFn, element, index, array) Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

Return: A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
Example:

```js
let colorArr = ["Red", "White", "Orange", "Black"]

let result = colorArr.filter(color => color.length > 4)

console.log(result)
['White', 'Orange', 'Black']

```

`filter` method creates a new array with all elements that pass the test implemented by the provided function.

No it does not mutate the original array

16 - `forEach`

Parameter:(callbackFn)Function to execute on each element.The function is called with the following arguments: (element) The current element being processed in the array.
(index) The index of element in the array.
(array) The array forEach() was called upon.
Return: undefined.
Example:


```js
let numbers = [3, 9, 13, 42, 29, 231, 353];

numbers.forEach(element => console.log(element));
3
9
13
42
29
231
353

numbers.forEach(element => console.log(element + 10));
13
19
23
52
39
241
363
```

forEach method executes a provided function once for each array element.
No it does not mutate the original array.

17 - `map`

Parameter:(callbackFn)Function to execute on each element.The function is called with the following arguments: (element) The current element being processed in the array.
(index) The index of element in the array.

(array) The array forEach() was called upon.
Return: A new array with each element being the result of the callback function.
Example:

```js
let numbers = [3, 9, 13, 42, 29, 231, 353]

let numResult = numbers.map((element) => {
    return element * 2
})
console.log(numResult)
[6, 18, 26, 84, 58, 462, 706]

```
map method creates a new array populated with the results of calling a provided function on every element in the calling array.
No it does not mutate the original array

18 - `pop`

Parameter: pop() no parameters

Return: The removed element from the array; undefined if the array is empty.
Example:

```js
let fruits = ['mango', 'orange', 'grapes', 'banana']

fruits.pop()
'banana'
console.log(fruits)
['mango', 'orange', 'grapes']

```

`pop` method removes the last element from an array and returns that element. This method changes the length of the array.
it does  mutate the original array

19 - `reduce`

Parameter: {callbackFn} previousValue: the value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

Return: The value that results from running the "reducer" callback function to completion over the entire array.
Example:


```js
const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);
85
```

`reduce` method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
No it does not mutate the original array.

20 - `slice`

Parameter: (start, end ) f start is undefined, slice starts from the index 0. If start is greater than the index range of the sequence, an empty array is returned.If end is omitted, slice extracts through the end of the sequence (arr.length).If end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length).
Return: A new array containing the extracted elements.
Example:

```js
let fruits = ['mango', 'orange', 'grapes', 'banana']

fruits.slice(1, 3)
['orange', 'grapes']
```

slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
No it does not mutate the original array

21 - `some`

Parameter: (callbackFn)A function to test for each element.

Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
Example:

```js
let num = [1, 2, 3, 4]

num.some((element) => element >= 4)
true

num.some((element) => element % 2 === 0)
true
```
`some` method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
No it does not mutate the original array