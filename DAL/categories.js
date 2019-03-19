const store = require('../DBL/store');

module.exports = {
    getAll(){
        return Object.values(store.get("categories"));
    },
    getById(categoryId){
        return store.get(`categories.${categoryId}`);
    },
    add(category){
        category.id = new Date().toString();
        store.set(`categories.${category.id}`, category);
        return category.id;
    },
    delete(categoryId){
        store.del(`categories.${categoryId}`);
        return categoryId;
    },
    patch(categoryId ,updatedCategory){
        let newCategory = this.getById(categoryId);
        Object.assign(newCategory, updatedCategory);
        store.set(`products.${categoryId}`, newCategory);
        return newCategory; 
    }
}