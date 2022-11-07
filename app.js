const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.206, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euro) =>{
    return euro * oneEuroIs["USD"]
}
module.exports = {fromEuroToDollar};

const fromDollarToYen = (euro) =>{
    return euro * ((euro * (oneEuroIs["USD"])) / ("JPY"))
}
module.exports = {fromDollarToYen};

const fromYenToPound = (euro) =>{
    return euro * ((euro * (oneEuroIs["JPY"])) / ("GBP"))
}
module.exports = {fromYenToPound};