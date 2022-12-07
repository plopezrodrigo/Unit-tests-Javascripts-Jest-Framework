const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.206, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) =>{
    return parseFloat (euro * oneEuroIs["USD"])
}

const fromDollarToYen = (dollar) =>{
    return parseFloat ((dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"])
}

const fromYenToPound = (yen) =>{
    return parseFloat (yen * ((oneEuroIs["GBP"])) / oneEuroIs["JPY"])
}
module.exports =  {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};