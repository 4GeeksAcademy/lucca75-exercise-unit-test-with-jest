const { fromEuroToDollar, fromDollarToYen, fromYanToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    expect(fromEuroToDollar(3.5)).toBe(3.745);
});

test("One dollar should be 113.15 yen", function() {
    expect(fromDollarToYen(1)).toBeCloseTo(113.15);
});

test("One yen should be 0.0070 pounds", function() {
    expect(fromYanToPound(1)).toBeCloseTo(0.0070);
});
