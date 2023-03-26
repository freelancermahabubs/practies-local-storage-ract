const getTotalPrice = (gunsPrice) =>{
 const  reducer = (previousPrice, currentPrice) => previousPrice + currentPrice.price;
const totalPrice = gunsPrice.reduce(reducer, 0);
return totalPrice

}
export {getTotalPrice}