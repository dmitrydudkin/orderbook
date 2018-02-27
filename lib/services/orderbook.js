const fetch = require('node-fetch');

const url = 'https://api.cryptowat.ch/markets/gdax/btcusd/orderbook'

module.exports = () => fetch(url)
  .then(res => res.json())
  .then(data => Promise.resolve(data.result));

