/* eslint consistent-return:0 */

const express = require('express');
const logger = require('./logger');
// const bodyParser = require('body-parser');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
 const mock_accounts = [ 
  { id: '84214645-0323-4525-b55b-e446806e7924',
  currency: 'USD',
  balance: '3000.0000000000000000',
  available: '0.0000000000000000',
  hold: '3000.0000000000000000',
  profile_id: 'cd38fbdb-8ece-4921-8120-8c74189bc120' },
  { id: '133956bd-6fea-4668-8a90-2e037f32856f',
  currency: 'LTC',
  balance: '2000.0000000000000000',
  available: '0.0000000000000000',
  hold: '0.0000000000000000',
  profile_id: 'cd38fbdb-8ece-4921-8120-8c74189bc120' },
  { id: 'f8b46e0b-071d-4ec6-b4d2-43bc1310e9d1',
  currency: 'ETH',
  balance: '1000.0000000000000000',
  available: '0.0000000000000000',
  hold: '0.0000000000000000',
  profile_id: 'cd38fbdb-8ece-4921-8120-8c74189bc120' },
  { id: 'ed9274db-0389-418b-b2ef-da6244c8c3b4',
  currency: 'BTC',
  balance: '1000.0000000000000000',
  available: '0.0000000000000000',
  hold: '0.0000000000000000',
  profile_id: 'cd38fbdb-8ece-4921-8120-8c74189bc120' }
]

const mock_orders = [
    {
        "id": "d0c5340b-6d6c-49d9-b567-48c4bfca13d2",
        "price": "0.10000000",
        "size": "0.01000000",
        "product_id": "BTC-USD",
        "side": "buy",
        "stp": "dc",
        "type": "limit",
        "time_in_force": "GTC",
        "post_only": false,
        "created_at": "2016-12-08T20:02:28.53864Z",
        "fill_fees": "0.0000000000000000",
        "filled_size": "0.00000000",
        "executed_value": "0.0000000000000000",
        "status": "open",
        "settled": false
    },
    {
        "id": "8b99b139-58f2-4ab2-8e7a-c11c846e3022",
        "price": "1.00000000",
        "size": "1.00000000",
        "product_id": "BTC-USD",
        "side": "buy",
        "stp": "dc",
        "type": "limit",
        "time_in_force": "GTC",
        "post_only": false,
        "created_at": "2016-12-08T20:01:19.038644Z",
        "fill_fees": "0.0000000000000000",
        "filled_size": "0.00000000",
        "executed_value": "0.0000000000000000",
        "status": "open",
        "settled": false
    }
]

const mock_fills = [
  {
      "trade_id": 74,
      "product_id": "BTC-USD",
      "price": "10.00",
      "size": "0.01",
      "order_id": "d50ec984-77a8-460a-b958-66f114b0de9b",
      "created_at": "2014-11-07T22:19:28.578544Z",
      "liquidity": "T",
      "fee": "0.00025",
      "settled": true,
      "side": "buy"
  }
]

const mock_deposits = [
  {
      "id": "593533d2-ff31-46e0-b22e-ca754147a96a",
      "amount": "3000.00",
      "currency": "USD",
      "payout_at": "2016-08-20T00:31:09Z"
  },
  {
      "id": "593533d2-ff31-46e0-b22e-ca754147a96a",
      "amount": "1000.00",
      "currency": "USD",
      "payout_at": "2017-05-10T07:20:09Z"
  }
]

app.post('/data/login', (req, res, next) => {
  // const gdaxKey = req.body.key;
  // const b64secret = Buffer(req.body.secret, 'base64');
  // const gdaxPassphrase = req.body.passphrase;

  // const authedClient = new Gdax.AuthenticatedClient(gdaxKey, b64secret, gdaxPassphrase);
  const responseObject = {}
  // responseObject.accountInfo = []
  // responseObject.orders = []
  // responseObject.fills = []
  // authedClient.getAccounts(function(err, response, data) {
  //  if (err || data.message) {
  //    console.error('There was an error: ', err || data.message)
  //    responseObject.error = 'There was an error, ' + data.message
  //    // res.render('login', { gdaxData: responseObject })
  //  } else {
  //    console.log('account response is successfull: ', data)
 //       responseObject.accountInfo = data

 //       authedClient.getFills(function(err, response, data) {
  //      if (err || data.message) {
  //        console.error('There was an error: ', err || data.message)
  //        responseObject.error = 'There was an error, ' + data.message
  //        // res.render('login', { gdaxData: responseObject })
  //      } else {
  //        console.log('fill response is successfull: ', data)
  //        responseObject.fills = data

  //        authedClient.getOrders(function(err, response, data) {
  //          if (err || data.message) {
  //            console.error('There was an error: ', err || data.message)
  //            responseObject.error = 'There was an error, ' + data.message
  //            // res.render('login', { gdaxData: responseObject })
  //          } else {
  //            console.log('order response is successfull: ', data)
  //            responseObject.orders = data

  //            console.log('responseObject', responseObject)
  //            // now that all callbacks are chained we can return the response to the client
  //            res.send({ gdaxData: responseObject })
  //          }
  //        })
  //      }
  //    })
  //  }
  // })
  responseObject.accountInfo = mock_accounts;
  responseObject.orders = mock_orders;
  responseObject.fills = mock_fills;
  responseObject.deposits = mock_deposits;
  res.send(responseObject);
});

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

const port = argv.port || process.env.PORT || 3000;

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    ngrok.connect(port, (innerErr, url) => {
      if (innerErr) {
        return logger.error(innerErr);
      }

      logger.appStarted(port, prettyHost, url);
    });
  } else {
    logger.appStarted(port, prettyHost);
  }
});
