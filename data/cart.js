
export let cart = JSON.parse(localStorage.getItem('cart')) ||
[
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    deliverydateId : '1',
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    deliverydateId : '3',
  },
];

function saveToStorage(){
   localStorage.setItem('cart',JSON.stringify(cart));
}

export function addTocart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  // Selecting the selector field of a Product.
  const quantitySector = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  const quantity = Number(quantitySector.value); // Convert to Number form String.

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity: quantity,
      deliverydateId : '1'
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
   const newCart = []

   cart.forEach(currentItem => {
     if (currentItem.productId !== productId){
      newCart.push(currentItem);
     }
   });

   cart = newCart;
   saveToStorage();
}
