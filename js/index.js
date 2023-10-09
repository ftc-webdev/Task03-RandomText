'use strict'

/*

    every time the page loads
    load the quotes module
    initialise it

*/
import { init } from "./modules/quotes/index.js"

document.addEventListener("DOMContentLoaded", () => {

    init("footer","./css/quotes.css")

})