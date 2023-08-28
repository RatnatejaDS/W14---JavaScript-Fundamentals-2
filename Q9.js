// As a web developer, you need to create a function that takes a username string as input and checks if it
// contains only unique characters. Use a Set to implement this efficiently

function hasUniqueCharacters(username) {
    // Create a Set to store encountered characters
    const charSet = new Set();

    // Loop through each character in the username
    for (const char of username) {
        // If the character is already in the Set, it's not unique
        if (charSet.has(char)) {
            return false;
        }

        // Add the character to the Set
        charSet.add(char);
    }

    // If the loop completes without finding any duplicates, all characters are unique
    return true;
}

// Example usage:
const username1 = "mithun";
const username2 = "anurag";

console.log(`Username "${username1}" has unique characters: ${hasUniqueCharacters(username1)}`);
console.log(`Username "${username2}" has unique characters: ${hasUniqueCharacters(username2)}`);




//----------------------------------------------------//
         // OUTPUT
        //  Username "mithun" has unique characters: true
        //  Username "anurag" has unique characters: false