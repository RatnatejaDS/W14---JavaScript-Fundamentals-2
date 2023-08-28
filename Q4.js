// You are working for an e-commerce client, and they provide you with an array of objects containing product
// names and their prices. Your task is to create a function that finds the product with the maximum amount
// (the highest price) and the product with the minimum amount (the lowest price) and prints them to the
// console.


// Function to find and print the product with the maximum and minimum prices.
function findMinMaxProducts(products) {
    // Initialize variables to store the maximum and minimum products.
    let maxProduct = null;
    let minProduct = null;

    // Initialize variables to store the maximum and minimum prices.
    let maxPrice = Number.NEGATIVE_INFINITY; // Initialize with a very low value.
    let minPrice = Number.POSITIVE_INFINITY; // Initialize with a very high value.

    // Loop through the array of products.
    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        // Check if the current product's price is greater than the maximum price.
        if (product.price > maxPrice) {
            maxPrice = product.price; // Update the maximum price.
            maxProduct = product; // Update the maximum product.
        }

        // Check if the current product's price is less than the minimum price.
        if (product.price < minPrice) {
            minPrice = product.price; // Update the minimum price.
            minProduct = product; // Update the minimum product.
        }
    }

    // Check if both maxProduct and minProduct were found.
    if (maxProduct && minProduct) {
        // Print the product with the maximum price.
        console.log(`Product with Maximum Price: ${maxProduct.name} - ₹${maxProduct.price}`);

        // Print the product with the minimum price.
        console.log(`Product with Minimum Price: ${minProduct.name} - ₹${minProduct.price}`);
    } else {
        // Handle the case when no products are provided.
        console.log("No products found.");
    }
}

// Example array of product objects with name and price.
const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    {name: "Mobile Charger" , price : 1500}
];

// Call the function to find and print the products with maximum and minimum prices.
findMinMaxProducts(products);


//----------------------------------------------------//
         // OUTPUT
    // Product with Maximum Price: Laptop - ₹120000
    // Product with Minimum Price: Mobile Charger - ₹1500