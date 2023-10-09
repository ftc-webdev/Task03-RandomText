'use strict'

// import { quotes } from "./quote-list.js"
import _quotes from "./quotes-json.js"
// console.log(quotes)
let quotes = _quotes.quotes// nested object 
/*
    dynamically creating a style block for a module
*/

let style = document.createElement("style")
style.innerText = `

.quote {
    border: 1px solid darkblue;
    border-radius: 3px;
    background-color: lightgray;
    color: black;
    padding: 3px;
}

.quote-text {
}

.quote-author {
    text-align: right;
    font-style: italic;
}

`

document.head.appendChild(style)

let init = (containerId, externalStyleSheet) => {
    
    let index = Math.floor(Math.random() * quotes.length-1)
    let quote = quotes[index]

    /*
        {
           "quote":"What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
           "author":"Bob Dylan"},
        {
    */
    
    if(externalStyleSheet) {
        let style = document.createElement("link")
        style.href = externalStyleSheet
        style.rel = "stylesheet"
        document.head.appendChild(style)
    }

    let html = `
        <div class="quote">
            <div class="quote-text">${quote.quote}</div>
            <div class="quote-author">${quote.author}</div>
        </div>
    `
    let container = document.getElementById(containerId)
    container.innerHTML = html

}

export {
    init
}







