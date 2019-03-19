const store = require('../DBL/store');

module.exports = {
    getAll(){
        return Object.values(store.get("products"));
    },
    getById(productId){
        return store.get(`products.${productId}`);
    },
    getByCategoryId(categoryId){
        return (this.getAll().filter(p => p.categoryId === categoryId));
    },
    add(product){
        product.id = new Date().toString();
        store.set(`products.${product.id}`, product);
        return product.id;
    },
    delete(productId){
        store.del(`products.${productId}`);
        return productId;
    },
    patch(productId ,updatedProduct){
        let newProduct = this.getById(productId);
        Object.assign(newProduct, updatedProduct);
        store.set(`products.${productId}`, newProduct);
        return true;
    }
}