 export const mock_accounts = [ 
	{ id: '84214645-0323-4525-b55b-e446806e7924',
	currency: 'USD',
	balance: '3000.0000000000000000',
	available: '0.0000000000000000',
	hold: '3000.0000000000000000',
	profile_id: 'cd38fbdb-8ece-4921-8120-8c74189bc120' },
	{ id: '133956bd-6fea-4668-8a90-2e037f32856f',
	currency: 'LTC',
	balance: '0.0000000000000000',
	available: '0.0000000000000000',
	hold: '0.0000000000000000',
	profile_id: 'cd38fbdb-8ece-4921-8120-8c74189bc120' },
	{ id: 'f8b46e0b-071d-4ec6-b4d2-43bc1310e9d1',
	currency: 'ETH',
	balance: '0.0000000000000000',
	available: '0.0000000000000000',
	hold: '0.0000000000000000',
	profile_id: 'cd38fbdb-8ece-4921-8120-8c74189bc120' },
	{ id: 'ed9274db-0389-418b-b2ef-da6244c8c3b4',
	currency: 'BTC',
	balance: '0.0000000000000000',
	available: '0.0000000000000000',
	hold: '0.0000000000000000',
	profile_id: 'cd38fbdb-8ece-4921-8120-8c74189bc120' }
]

export const mock_orders = [
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

export const mock_fills = [
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