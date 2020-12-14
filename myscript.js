var arrayOfQuotes = [
    
    {
        "author":"Jim Rohn",
        "quote":"Beware of what you become"
    },
    {
        "author":"Epictetus",
        "quote":"Its not what happens to you"
    },
    {
        "author":"Frank Sinatra",
        "quote":"The best revenge is massive success."
    },
    {
        "author":"Nelson Mandela",
        "quote":"Resentment is like drinking poison."
    },
    {
        "author":"Confucius",
        "quote":"Silence is a true friend."
    }
    
]
function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].author + '"';
}




