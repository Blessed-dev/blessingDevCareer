console.log("Hello world")
console.log("I am here!")

const cc = require("currency converter-lt")

let fromcurrency = "usd"; // us dollers

let tocurrency = "ngn"; // nigerian naira

let amounttoconvert = 1;

let currencyconverter = new cc({
  from: fromcurrency,
    to:tocurrency,
    amount:amounttoconvert
}) 
currencyconverter.convert().then ((Response) =>{
    console.log(amounttoconvert + "  " + fromcurrency + "is equal to"
    + response + "  " + tocurrency
)});


