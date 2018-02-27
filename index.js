const { getOrderBook } = require('./lib/services'); // просто для теста
const { arbitrage } = require('./lib');

const asks = [ [ 100, 2 ], [ 90, 1] ];
const bids = [ [ 40, 10 ], [ 80, 1 ], [ 99, 1 ], [ 100, 2] ];

const results = arbitrage(asks, bids);

console.log('Results:');
console.log(results);
