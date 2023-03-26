const addDb = price =>{
let shoppingCart = {};
const storedCart = localStorage.getItem('shopping-cart');
if(storedCart){
  shoppingCart = JSON.parse(storedCart)
}
const quantity = shoppingCart[price];
if(quantity){
  const newQuantity = quantity + 1;
  shoppingCart[price] = newQuantity;
}
else{
  shoppingCart[price] = 1;
  
}
localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
};

const removeDb  = price =>{
  const storedCart = localStorage.getItem('shopping-cart');
  if(storedCart){
    const shoppingCart = JSON.parse(storedCart)
    if(price in shoppingCart){
     delete shoppingCart[price];
     localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
};


export {
  addDb,
  removeDb
}

