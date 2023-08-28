// 0 Imagine you work for an e-commerce company. Your task is to create a function that takes the prices of all
// the products in a customer's cart as input parameters. The function should then calculate and return the
// total sum of all the product prices. This will help the company easily calculate the total cost of the
// customer's shopping cart.

// Function to calculate the total sum of product prices in a customer's cart.
function calculateTotal(cartPrices) {
    // Initialize a variable to store the total sum.
    let total = 0;

    // Loop through the array of product prices.
    for (let i = 0; i < cartPrices.length; i++) {
        // Add each product price to the total.
        total += cartPrices[i];
    }

    // Return the calculated total sum.
    return total;
}

// Example usage:
const customerCart = [125, 20, 30];
const totalPrice = calculateTotal(customerCart);

// Print the total price with 2 decimal places.
console.log(`Total price in the cart: ₹${totalPrice.toFixed(2)}`);


    //----------------------------------------------------//
            // OUTPUT
    // Total price in the cart: ₹175.00