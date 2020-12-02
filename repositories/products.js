const Repository = require('./repository');


class ProdctsRepository extends Repository {

}

module.exports = new ProdctsRepository('products.json');