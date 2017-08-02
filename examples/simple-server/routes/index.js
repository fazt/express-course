var express = require('express');

var router = express.Router();

var items = [
	{id: 1, name: 'product1'},
	{id: 2, name: 'product2'},
	{id: 3, name: 'product3'}
];

router.get('/', (req, res) => {
	res.render('index', {
		title: 'MyWebStore'
	});
});

router.get('/products', (req, res) => {
	res.render('products', {
		title: 'List of Products',
		items
	});
});

router.post('/new-product', (req, res) => {
	
	var newItem = req.body.newItem;
	console.log(newItem);

	items.push({
		id: items.length + 1,
		name: newItem
	});

	res.redirect('/products');
});

module.exports = router;
