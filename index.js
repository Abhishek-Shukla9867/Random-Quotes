document.addEventListener("DOMContentLoaded", function () {
  const getQuoteBtn = document.getElementById("getQuoteBtn");
  const quoteText = document.getElementById("quoteText");

  getQuoteBtn.addEventListener("click", getQuote);

  function getQuote() {
    fetch("https://zenquotes.io/api/random")
      .then((response) => response.json())
      .then((data) => {
        const quote = data[0].q;
        quoteText.innerText = `"${quote}"`;
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
        quoteText.innerText = "Failed to fetch a quote. Please try again.";
      });
  }
});
