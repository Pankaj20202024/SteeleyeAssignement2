// Function for calculating the number of occurence of plaintextword before the position

function countOccurrencesBeforePosition(plainText, plaintextword, position) {
  const portionBeforePosition = plainText.slice(0, position);
  const regex = new RegExp(plaintextword, "g");
  const matches = portionBeforePosition.match(regex);
  return matches ? matches.length : 0;
}

/* function for highlighting  find the appropriate positions in htmlContent based on the positions in plainText, 
highlight the content at those positions, and return the modified htmlContent as a string.*/

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

// Defining the parameter for passing them to highlightHTMLContent function
const htmlContent =
  '<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href="https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI">here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href="https://iris.steeleye.co/market/instruments?search=ES0113900J37">ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">here</a>.<br><br>-------------------------------------<br><br><img src="https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png" alt="Rick Astley" style="width:100px;height:100px;"></span></p>';
const plainText =
  "Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------";
const plainTextPositions = [
  {
    start: 241,
    end: 247,
  },
  {
    start: 518,
    end: 525,
  },
];

/* Function for iterating over the plainTextPositions array and for calling the highlightHTMLContent function again and again for 
all object inside it */

function getTerminalOutput() {
  let terminaloutput = htmlContent;
  plainTextPositions.forEach((data) => {
    terminaloutput = highlightHTMLContent(terminaloutput, plainText, data);
  });

  return terminaloutput;
}

// calling getTerminalOutput function for start executin our code

const TermiOutput = getTerminalOutput();

// printing the output returned by the getTerminalOutput

console.log(TermiOutput);
