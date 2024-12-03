/*
👉 You do the rest!

### 1. Favorite Songs

- Tiny Dancer
- Running Up That Hill
- Don't Stop Moving
- Tragedy
- Crazy Horses
*/
const favoriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"];


/*
### 2. Profit From First Seven Days of the School of Code's Penny Doubling Pyramid Scheme 💰💰💰

- 1
- 2
- 4
- 8
- 16
- 32
- 64
*/
const profit = [1,2, 4, 8, 16, 32, 64];

/*
### 3. Friends

- Name is Chris; special skill is changing lives.
- Name is Lizzie; special skill is being friendly.
- Name is Ben; special skill is code rapping.
- Name is Tao; special skill is hand raising.
- Name is Liz; special skill is crochet.
- Name is Patrick; special skill is Call of Duty.
- Name is Tim; special skill is analogies.
- Name is James; special skill is friendship.
- Name is Joseph; special skill is being positive.
- Name is Max; special skill is papier-mâché.
*/
const friends = [
    "Name is Chris; special skill is changing lives",
    "Name is Lizzie; special skill is being friendly",
    "Name is Ben; special skill is code rapping",
    "Name is Tao; special skill is hand raising.",
    "Name is Liz; special skill is crochet.", 
    "Name is Patrick; special skill is Call of Duty.",
    "Name is Tim; special skill is analogies.",
    "Name is James; special skill is friendship.",
    "Name is Joseph; special skill is being positive.",
    "Name is Max; special skill is papier-mâché."
]

/*
## Task 2 - Reading Array Values

```js
*/
let options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(options[3]);
console.log(options[10]);
console.log(options[5]);


/*
```

Using bracket notation and the correct index, for each person...

👉 ✅Console.log the month in which you were born.

👉 ✅Console.log the month your mother was born.

👉 ✅Console.log your favorite month.

## Task 3 - Looping and Accessing

We can use the useful loops we learned to access the items in an array.

```js
*/
let englishNumbers = ["one", "two", "three", "four", "five"];

let index = 0;
while(index < englishNumbers.length){
    console.log(englishNumbers[index]);
    index += 1;
}
/*
```

👉 ✅ Declare an index variable and assign it the value of 0.

👉 ✅ In a while loop, console.log the array item at the current index and add 1 to the index variable.

👉 Have the while loop run until the index is equal to or greater than the array's length property.

## Task 4 - Looping and Accessing

👉 Refactor task three to use a for loop instead of a while loop.

## Task 5 - Looping and Reassigning

```js
let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
// for loop goes here

console.log(words);
```

👉 Use a for loop to iterate over the words array and add the letter t to the end of each word ("ben" becomes "bent", "ha" becomes "hat", etc.).

## Task 6 - Get Experimental

👉 Explore arrays more. For example, you could...

- Create nested arrays and objects.
- Create functions that take in information and use that information to create or change arrays.
- Find a way to write a function that gives back a random item in the array.
- Look online in documentation (for example, [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) or [W3Schools](https://www.w3schools.com/js/js_arrays.asp)) about arrays in JavaScript. Can you find anything new or surprising?
*/