const quotes = document.getElementById("text");
const authors = document.getElementById("author");
const tweetBtn = document.getElementById("tweet-quote");
const newQuoteBtn = document.getElementById("new-quote");

document.addEventListener("DOMContentLoaded", function () {
  newQuote();
});

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}

async function getRandomQuote() {
  var newQuotes = "";
  var newAuthors = "";
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    console.log(data);
    newQuotes = data.content;
    console.log(newQuotes);
    newAuthors = data.author;
  } catch (err) {
    console.log(err);
  }
  return { newQuotes, newAuthors };
}

async function newQuote() {
  const newColor = getRandomColor();
  const { newQuotes, newAuthors } = await getRandomQuote();
  console.log(newQuotes);
  document.body.style.backgroundColor = newColor;
  quotes.style.color = newColor;
  quotes.textContent = newQuotes;
  authors.textContent = newAuthors;
  authors.style.color = newColor;
  tweetBtn.style.color = newColor;
  newQuoteBtn.style.backgroundColor = newColor;
}
