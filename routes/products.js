var express = require('express');
var router = express.Router();
const productsDB = require('../DAL/products');
const categoriesDB = require('../DAL/categories');

router.get('/', (req, res)=> {
    res.send(productsDB.getAll());
});

router.post('/', (req, res)=> {
    res.send( "product added with id: " + productsDB.add(req.body));
});

router.get('/:id', (req, res)=> {
    res.send(productsDB.getById(req.params.id));
});

router.delete('/:id', (req, res)=> {
    res.send('product with id: ' + productsDB.delete(req.params.id) + "was deleted successfully");
});

router.patch('/:id', (req, res)=> {
    productsDB.patch(req.params.id, req.body);
    res.send('product with id: ' + req.params.id + "was updateded successfully");
});

router.get('/:id/category', (req, res)=> {
    let product = productsDB.getById(req.params.id);
    res.send(categoriesDB.getById(product.categoryId));
});

module.exports = router;