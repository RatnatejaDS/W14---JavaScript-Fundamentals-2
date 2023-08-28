// You are working for an e-commerce company, and you are given an object containing product-related
// information. Your task is to print the product-related information details as shown in the image below.

// Object containing product-related information
const product = {
    name: "Apple 2020 MacBook Air Laptop",
    price: 82000,
    color: 'Grey',
    hardisk: '256GB'
};

// Function to print product details
function printProductDetails(product) {
    // Print the product details with appropriate formatting.
    console.log(`Product Name: ${product.name}`);
    console.log(`Price: ₹${product.price}`);
    console.log(`Color: ${product.color}`);
    console.log(`Hard Disk: ${product.hardisk}`);
}

// Call the function to print product details
printProductDetails(product);

//----------------------------------------------------//
         // OUTPUT
        //  Product Name: Apple 2020 MacBook Air Laptop
        //  Price: ₹82000
        //  Color: Grey
        //  Hard Disk: 256GB

