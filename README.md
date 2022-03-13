# Why I did this?


I applied for a job and I needed to **resolve a challenge** using only  JavaSacript. Unfortunately, I couldn't find the bug before the deadline (about 40 minutes) and I got very upset. So I did what every programmer would do: **I took that personal**. I spent a few more minutes figuring out the bug and fixing it.

I'm learning Next.js so I thought "*Should I make a simple app to train what I've already learned?*" **Why not?**. Btw it was useful to remind a bit of Bootstrap...



# The challenge
I don't remember the exact question, but I'm sure you will get the idea.  
The user should select a number (between 0-9). From that, the program should generate a new 4-digit number by repeating the user input. Here is an example: 

```tsx
	userInput = 3;
	newNumber = 3333;
```
    
New it should create an array that contains every number that the sum of all its digits should be equal to 21 (basically we need to decompose the numbers and sum). With that said we will have (using the *newNumber* variable above as reference) the result:
```tsx
	resultArray = [1299, 1389, 1398, ..., 3297]
```
ps.:  Because this is impossible to occur with the numbers 0 and 1 I excluded them (0993 is not valid).

Note: I couldn't find the exact link but it was on [HackerRank](https://www.hackerrank.com/).

## Some code
First of all we need to convert the user input into a 4-digit number:
```tsx
function  convertToMaxValue(value: number) {
	return  `${value}${value}${value}${value}`;
	//note that the returned value is a string
}
```

 
We also need to check if all the selected numbers fill the 21-sum requirement. This function will be called later.
```tsx
function check_number(checking_number: number) {
	const number_array = Array.from(checking_number.toString().split(""));
	const sum = Number(
		number_array.reduce((acc, currVal) => {
			return acc + Number(currVal);
			}, 0)
		);
	if (sum == 21) {
		return true;
	    }
	return false;
}
```

Once we've done that we are ready to go end get our answer. 

In first place we generate an Array with all the positive numbers up to the max possible value (which is that 4-digit). You might notice that a filter removes all non-4-digit numbers whitch was our first objective. 
```tsx
function  generate_numbers(max: string): number[] {
	const  max_number_possible  =  Number(max);
	const  all_numbers_array  =  Array.from(Array(max_number_possible  +  1).keys())
		.filter((number) =>  number.toString().length  ==  LENGTH);
	const  result_array  = all_numbers_array.filter(check_number);
	return  result_array;
        }
```
In the end, we have our result array with all numbers that respect all the requirements.
You can check this code working by [clicking here](https://sum-21-challenge.vercel.app/)

My Linked-in: [Luca Alfaro Rampinelli](https://www.linkedin.com/in/lucarampi/)
