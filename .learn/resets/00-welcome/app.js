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
    return euro * oneEuroIs["USD"]
}

const fromDollarToYen = (dollar) =>{
    return (dollar / oneEuroIs["USD"]) * oneEuroIs["JPY"]
}

const fromYenToPound = (euro) =>{
    return euro * ((euro * (oneEuroIs["JPY"])) / ("GBP"))
}
module.exports =  {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};