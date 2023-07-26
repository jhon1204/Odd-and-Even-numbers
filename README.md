# Odd-and-Even-numbers

This repository is used to store the answer to a question by haystack news. Here I will give more detail about how I finally got to the answer.

## Question

Please write a function that takes an array of Random Integers as the input and returns an array where all the Even numbers are at the beginning and all the Odd numbers are at the end. Solve with `O(n)` efficiency and `O(1)` memory.
Assume that the complexity of removing an element from the array is `O(n)`.

## Analysis

First I started thinking about the problem and what it meant. Since we have to use an algorithm with time complexity of **O(n)** that means we can only iterate once over the array. Because removing an element from the array would have an **O(n)** time complexity and we need to keep a constant **O(1)** space complexity, I've decided to not remove elements from the array but instead of it replace the value without removing them (_just overwriting the values_).

## Problem identification

After reading the given constraints it was necessary to think about how to build the algorithm. That was when I noticed that the problem was a variation of the [Dutch national flag problem](https://en.wikipedia.org/wiki/Dutch_national_flag_problem), where there are only two "colors" (_the even and odd numbers_).

### Pseudocode

Here is the pseudocode of the solution for the [Dutch national flag problem](https://en.wikipedia.org/wiki/Dutch_national_flag_problem) (proposed by Dijkstra).
First:

- Entries from 0 up to (but not including) i are values less than mid.
- Entries from i up to (but not including) j are values equal to mid.
- Entries from j up to (and including) k are values not yet sorted.
- Entries from k + 1 to the end of the array are values greater than mid.

```
procedure three-way-partition(A : array of values, mid : value):
    i ← 0
    j ← 0
    k ← size of A - 1

    while j <= k:
        if A[j] < mid:
            swap A[i] and A[j]
            i ← i + 1
            j ← j + 1
        else if A[j] > mid:
            swap A[j] and A[k]
            k ← k - 1
        else:
            j ← j + 1
```

So to get to the pseudocode for the solution to our problem we would need to modify the solution for the Dutch national flag problem. Instead of separating 3 groups we only need to separate the values into two groups.
We would only need two indexes and we would initialize the first one as 0 and the second one as n-1.
So the pseudocode would look like this:

```
procedure sort_even_n_odd(A : array of values):
    i ← 0
    j ← size of A - 1

    while i < j:
        if A[i] is odd :
          if A[j] is even:
            swap A[i] and A[j]
          j ← j - 1
        else:
            i ← i + 1
```

## Proposed solution

The solution is based on the previous pseudocode. Here is the [link](https://github.com/jhon1204/Odd-and-Even-numbers/blob/main/docs/index.js) to the script file. The function that does all the work is called `sortEvenNOdd`. The rest of the code there is just to allow us to test this in a static page I created.

## How to test the solution

You have two options: to run it locally with node (_v18.15.0_)
or you can test it in your browser in the test page I created.

### Testing the solution locally

For this you will need to have node installed. This project was developed using v18.15.0 you can see how to install it from the official documentation of [NodeJS](https://nodejs.org/en/download).
After you have installed node you have to execute this command in the console

```bash
node ./docs/index.js

```

Now you should see the result in your console. It's important to mention that the array that we're sorting is the one in called `arrayToSort` in the js file. If you want to test with different arrays just insert a different array as the value of `arrayToSort`.

### Testing the solution in the browser

You can test the code using the your browser [here](https://jhon1204.github.io/Odd-and-Even-numbers/).
You have to insert the array you want to sort inside the input field. This one should be formated as a JS array, if not the page will show an error message.
Once you've inserted the array you would click the submit button and the page will show the sorted array.

## Contact

If you have aditional questions or comments you can reach me here:

- jhon.benites@pucp.edu.pe
- jhoncaleb1204@gmail.com
- [LinkedIn](https://www.linkedin.com/in/jhonbeniteshuaman/)

## Additional Notes

Since the code for this question was really small I thought that using a frontend framework for the test page (VueJS, ReactJS, NextJS, NuxtJS or static pages generator like Gatsby) would be an overkill, that´s why I decided to go with vanilla JS.
Also, the code is located inside the `/docs` folder because that way github would allow me to deploy the page in _Github Pages_.
