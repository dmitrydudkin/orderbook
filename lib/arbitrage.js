const debug = require('debug')('arbitrage');

module.exports = arbitrage;

function arbitrage(asks, bids) {
  let idx = 0; // подразумевается что массивы отсортированны "как в стакане"
  const profits = [];

  while(asks[0] && asks[0][0] > bids[0][0]) {

    const askOrder = asks[0];
    const bidOrder = bids[0];

    const [askPrice, askVolume] = askOrder;
    const [bidPrice, bidVolume] = bidOrder;

    const volume = askVolume > bidVolume ? bidVolume :
      askVolume < bidVolume ? askVolume : askVolume;

    const marge = askPrice - bidPrice;
    const profit = (marge / (askPrice / 100 )).toFixed(2);

    debug('\n------------------');
    debug('askPrice:', askPrice);
    debug('bidPrice:', bidPrice);
    debug('volume:', volume);
    debug(`profit: ${profit}%`);
    debug('------------------');

    // "закрываем сделку" и идем дальше...
    // FIXME: не учитывается частичное закрытие сделки
    asks.shift();
    bids.shift();

    profits.push({ amount: volume, percent: profit });
  }

  debug('\nПрибыльных сделок больше нет');
  debug('Итого сделок:', profits.length);

  return profits
}
