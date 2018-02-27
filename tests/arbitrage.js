const should = require('should');
const { arbitrage } = require('../lib');

describe('should', () => {
  let bids, asks;

  const results = [
    { amount: 2, percent: '60.00' },
    { amount: 1, percent: '11.11' }
  ]

  beforeEach(() => {
    asks = [ [ 100, 2 ], [ 90, 1] ];
    bids = [ [ 40, 10 ], [ 80, 1 ], [ 99, 1 ], [ 100, 2] ];
  });

  it('match profit deals count', () => {
    arbitrage(asks, bids).length.should.be.exactly(results.length)
  })

  it('correct calculate profit', () => {
    const result = results[0];
    const { percent: profit } = result;

    arbitrage(asks, bids)[0].percent.should.be.exactly(profit)
  })
})
