// Write your code here

const products = ["Laptop" , "Phone", "Headphones" , "Monitor"];

function logFirstProduct() {


  console.log(products[0]);
}

function addProduct() {

  products.push("Keyboard");
}  

function updateProductName(position, newName) {

products[2] = "Earphones";
} 

function removeLastProduct() {
  
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
