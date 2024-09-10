const path = require('path');
const productService = require('../data/productService');
const fs = require('fs');
const { log } = require('console');

const productController = {

  index: (req, res) => {
      res.render('index');    
    
  }
}


module.exports = productController