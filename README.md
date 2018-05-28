# CalculatorTestApp
Calculator Test for Interview

## Thoughts

1) Node.JS

Probably should get a better understanding of this before embarking on projects in the future.
Works well in the command line, not so well, for my level of knowledge, in a web app.

2) eval

Makes the challenge too simple in JS due to it's ability to type cast so easily.

3) Brackets

```(37-26)*4-2```

Would be relatively simple to work with programatically.

```(37-26)*(4-2)```

Becomes more difficult, but still workable.

```(37-(2+24))*(4-2)```

Becomes even more difficult, I can see where the brackets match, but writing code that can "see" this also...

4) RegEx

Leading on from the last bullet, creating regex to match the top two sums proved relatively painless.

```(\(.*?\)|\*|\/|\-|\+|[0-9]*)```

Using a recursive function, with a while loop, expanding the brackets in the first two sums would be relatively simple. The third sum is where things get more difficult again.

Creating a Regular Expression to catch the final sum caught me out.

## Closing Thoughts

The app I created was rather simple, using eval and then going off to create a regular expression to get a better answer proved to consume far more time than I wanted, especially when the regular expression I finished with didn't provide as good a solution as I would've liked. In hindsight, I should've gone with the regular expression method and created the recursive function to provide a better solution out of the box.
