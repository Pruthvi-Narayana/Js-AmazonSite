export const cart = [];

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
    });
  }
}
