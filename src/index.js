function displayQuote(response) {
  console.log("quote genereated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsTnput = document.querySelector("#user-instructions");
  let apiKey = "d4foet361213f3b30afa232b35321ba2";
  let prompt = `User instructions: Generate a quote about ${instructionsTnput.value} `;
  let context =
    "You are a quote expert and love to write short quotes.Your aim is to generate a 2 line quote in basic HTML and seperate each line with a <br/>.Make sure to follow the user instructions .";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="blink"> Generating quotes about ${instructionsTnput.value}</div>`;
  console.log("Generating quote");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);
  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
