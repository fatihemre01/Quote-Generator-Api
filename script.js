const quoteText = document.querySelector(".quote")
const nameDiv = document.querySelector(".author")
const quoteBtn = document.querySelector(".new-quote")

function randomQuote(){ 
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading.."
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
        quoteText.innerHTML = data.content
        nameDiv.innerHTML = data.author

        quoteBtn.classList.remove("loading")
        quoteBtn.innerText = "New Quote"
})}

quoteBtn.addEventListener("click", randomQuote)