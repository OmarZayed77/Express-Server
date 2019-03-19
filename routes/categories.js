var express = require('express');
var router = express.Router();
const categoriesDB = require('../DAL/categories');
const productsDB = require('../DAL/products');

router.get('/', (req, res)=> {
    res.send(categoriesDB.getAll());
});

router.post('/', (req, res)=> {
    res.send( "category added with id: " + categoriesDB.add(req.body));
});

router.get('/:categoryId', (req, res)=> {
    res.send(categoriesDB.getById(req.params.categoryId));
});

router.delete('/:id', (req, res)=> {
    res.send('category with id: ' + categoriesDB.delete(req.params.id) + "was deleted successfully");
});

router.patch('/:id', (req, res)=> {
    categoriesDB.patch(req.params.id, req.body);
    res.send('category with id: ' + req.params.id + "was updateded successfully");
});

router.get('/:categoryId/products', (req, res)=> {
    res.send(productsDB.getByCategoryId(req.params.categoryId));
});


module.exports = router;