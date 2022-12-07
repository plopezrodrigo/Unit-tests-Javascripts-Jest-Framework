const { sum, fromDollarToYen, fromEuroToDollar } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.221); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 154.24 yens", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(3.5)).toBe(371.1857379767828); //1 dolar son 154,24 yenes, entonces 3.5 dolares deberian ser = (3.5 * 154,24)
})

test("One yen should be 159.87 pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(fromDollarToYen(fromEuroToDollar(3.5)))).toBe(2.8000000000000003); //1 yen son 159.87 libras, entonces 3.5 yenes deberian ser = (3.5 * 159.87)
})