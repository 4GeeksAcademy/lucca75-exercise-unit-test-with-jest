const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const sum = (a, b) => {
    return a + b;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar * 113.15; 
    return valueInYen;
}

const fromYanToPound = function(valueInYen) {
    let valueInPound = valueInYen * 0.0070; 
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYanToPound };

console.log(sum(7,3));
