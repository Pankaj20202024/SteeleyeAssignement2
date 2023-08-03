### Code Approach Explanation: 

#### The main execution:

```jsx 

const TermiOutput = getTerminalOutput();
console.log(TermiOutput);

```

1. The `getTerminalOutput` function is called and the result is stored in 
   the `TermiOutput` variable.
2. The modified `htmlContent` is logged to the console using `console.log`.

#### Function 2 : getTerminalOutput

Then I have created the `getTerminalOutput` function : 

```jsx 

function getTerminalOutput() {
  let terminaloutput = htmlContent;
  plainTextPositions.forEach((data) => {
    terminaloutput = highlightHTMLContent(terminaloutput, plainText, data);
  });

  return terminaloutput;
}

```

1. This function is responsible for calling the `highlightHTMLContent` 
   function multiple times with different `data` objects in the 
   `plainTextPositions` array.
2. It initializes a `terminaloutput` variable with the initial 
   `htmlContent`.
3. It iterates over each data object in the `plainTextPositions` array and 
   calls the `highlightHTMLContent` function with the current data.
4. It updates the `terminaloutput` with the modified `htmlContent` after 
   each call to `highlightHTMLContent`.
5. Finally, it returns the fully modified `htmlContent`.

#### Function 3 : highlightHTMLContent

Then I have written this `highlightHTMLContent` function.

```jsx 

function highlightHTMLContent(htmlContent, plainText, data) {
  const plaintextword = plainText.slice(data.start, data.end);
  const occurrencesBefore = countOccurrencesBeforePosition(
    plainText,
    plaintextword,
    data.start
  );

  let count = 0;
  for (let i = 0; i < htmlContent.length; i++) {
    const portionToCheck = htmlContent.slice(i, i + plaintextword.length);
    if (portionToCheck === plaintextword) {
      count++;
      if (count > occurrencesBefore) {
        // Highlight the next occurrence of plaintextword
        const regex = new RegExp(plaintextword, "g");
        htmlContent = htmlContent.replace(regex, (match, index) => {
          if (index === i) {
            return `<mark>${match}</mark>`;
          } else {
            return match;
          }
        });
        break;
      }
    }
  }

  return htmlContent;
}

```

1. This function takes three parameters: `htmlContent` (the HTML content 
   to be modified), `plainText` (the entire plain text), and `data` (an 
   object containing `start` and `end` positions in the plain text).
2. It extracts the `plaintextword` based on the provided start and end 
   positions in the plainTextPositions array.

```jsx 

  const plaintextword = plainText.slice(data.start, data.end);

``` 

3. It calculates the number of occurrences of the `plaintextword` before 
   the specified `start` position using the 
   `countOccurrencesBeforePosition` function.

```jsx 

 const occurrencesBefore = countOccurrencesBeforePosition(
    plainText,
    plaintextword,
    data.start
  );

```

4. It initializes a `count` variable to keep track of the occurrences of 
   the `plaintextword` in the `htmlContent`.

```jsx

let count = 0;

```

5. It iterates over the `htmlContent` to find occurrences of the 
   `plaintextword`. When it finds a match, it increments the `count` and 
   checks if the count is greater than the occurrences found before the 
   start position. If yes, it highlights the next occurrence of the 
   `plaintextword` using the `<mark>` tag and breaks out of the loop.

```jsx

for (let i = 0; i < htmlContent.length; i++) {
    const portionToCheck = htmlContent.slice(i, i + plaintextword.length);
    if (portionToCheck === plaintextword) {
      count++;
      if (count > occurrencesBefore) {
        // Highlight the next occurrence of plaintextword
        const regex = new RegExp(plaintextword, "g");
        htmlContent = htmlContent.replace(regex, (match, index) => {
          if (index === i) {
            return `<mark>${match}</mark>`;
          } else {
            return match;
          }
        });
        break;
      }
    }
  }

```

6. The function returns the modified `htmlContent`.

#### Function 4 : countOccurrencesBeforePosition

The countOccurrencesBeforePosition function:

```jsx 

function countOccurrencesBeforePosition(plainText, plaintextword, position) {
  const portionBeforePosition = plainText.slice(0, position);
  const regex = new RegExp(plaintextword, "g");
  const matches = portionBeforePosition.match(regex);
  return matches ? matches.length : 0;
}

```

1. This function takes three parameters: `plainText` (the entire plain 
   text), `plaintextword` (the word to count occurrences for), and 
   `position` (the position until which to count occurrences).
2. It extracts a portion of the `plainText` up to the `position` using 
   `plainText.slice(0, position)`.
3. It creates a regular expression (`RegExp`) object using `new` 
   `RegExp(plaintextword, "g")` to find all occurrences of `plaintextword`.
4. It uses the `match` method with the regular expression on the portion 
   of the `plainText` to find all matches.
5. It returns the number of matches (occurrences) found, or `0` if no 
   matches are found.

***

### Output Screenshot 

#### Inside Visual Studio Code

<img width="960" alt="Screenshot 2023-08-03 215101" src="https://github.com/Pankaj20202024/SteeleyeAssignement2/assets/121535589/25ee2448-e504-43bc-9178-09e0501d4218">

#### Inside Console in google chrome 

<img width="847" alt="Screenshot 2023-08-03 215217" src="https://github.com/Pankaj20202024/SteeleyeAssignement2/assets/121535589/ca624ecc-664e-4c2d-acd8-c257bac78767">

***
### Execution Demo 

https://github.com/Pankaj20202024/SteeleyeAssignement2/assets/121535589/f86fec2c-c91d-4bdd-9122-f64af5562153
