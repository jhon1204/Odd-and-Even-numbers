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
