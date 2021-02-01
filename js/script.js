const factBtn = document.querySelector("button");
const factInput = document.querySelector("input");
const factPara = document.querySelector("p");

async function fetchFact(number) {
  const proxyURL = "https://proxy-server-cors-anywhere.herokuapp.com";
  const factURL = "http://numbersapi.com";
  const response = await fetch(`${proxyURL}/${factURL}/${number}`, {
    method: "GET",
    headers: {
      "x-requested-with": "text/plain",
    },
  });
  const responseData = await response.text();
  factPara.innerText = responseData;
}

function handleGetFactBtn() {
  const numberFact = parseInt(factInput.value);
  fetchFact(numberFact);
}

factBtn.addEventListener("click", handleGetFactBtn);
