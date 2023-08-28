// Imagine you are working for a digital banking platform, and your team is tasked with improving the security
// of customer accounts. Your challenge is to create a function that generates a random 4-digit OTP (One-
// Time Password) for authentication purposes

// Function to generate a random 4-digit OTP
function generateOTP() {
    // Generate a random number between 1000 and 9999 (inclusive)
    const min = 1000;
    const max = 9999;
    const otp = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Return the OTP as a string
    return otp.toString();
}

// Call the function to generate an OTP
const otp = generateOTP();

// Print the generated OTP
console.log(`Generated OTP: ${otp}`);

//----------------------------------------------------//
         // OUTPUT
        // Generated OTP: 5051 
        // Generated OTP: 1735
        // Generated OTP: 3360