// Define an array to store cart items
let cartItems = [];

// Function to add a product to the cart
function addToCart(productName, price) {
  // Add the product to the cartItems array
  cartItems.push({ name: productName, price: price });

  const cartContainer = document.getElementById("cart-items");
  if (cartContainer) {
    // Update the cart display if the container exists
    displayCart();
  }
}

// Function to display the cart
function displayCart() {
  const cartContainer = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-subtotal");

  // Clear the cart display
  cartContainer.innerHTML = "";

  // Check if cart is empty
  if (cartItems.length === 0) {
    emptyCartMessage.style.display = "block";
  } else {
    emptyCartMessage.style.display = "none";
    // Display each item in the cart
    cartItems.forEach((item, index) => {
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = `
                <div class="item-details">
                    <span class="product-name">${item.name}</span>
                    <span class="quantity"> x1  </span>
                    <span class="price">$${item.price.toFixed(2)}</span>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${index})">&times;</button>
            `;
      cartContainer.appendChild(cartItemElement);
    });
  }

  // Calculate and display total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  displayCart();
}

// Function for checkout button
function checkout() {
  // You can replace this alert with your actual checkout process
  alert("Checkout functionality will be implemented in future updates!");
}

// Example usage: Add a product to the cart
addToCart("Nike Jordan", 126.99);
addToCart("Nike Free RN", 89.99);
