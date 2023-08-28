// Let’s say you are working for an event management company. You have a list of guest names as an array of
// strings. Your task is to return a sentence that has all the guest names, separated by commas.

// Function to create a sentence with guest names separated by commas.
function createGuestList(guestNames) {
    // Check if the guestNames array is empty.
    if (guestNames.length === 0) {
        return "No guests.";
    }

    // Initialize an empty string to store the guest list.
    let guestList = "";

    // Loop through the guest names.
    for (let i = 0; i < guestNames.length; i++) {
        // Append each guest name to the guestList string.
        guestList += guestNames[i];

        // Add a comma and space if it's not the last name.
        if (i < guestNames.length - 1) {
            guestList += ", ";
        }
    }

    // Return the sentence.
    return `Guests: ${guestList}`;
}

// Example array of guest names.
const guests = ["Anurag", "Mithun", "Alka", "Prabir" , "Shivam", 'Farman'];

// Call the function to create a guest list sentence.
const guestListSentence = createGuestList(guests);

// Print the result to the console.
console.log(guestListSentence);
console.log(typeof guestListSentence);

//----------------------------------------------------//
         // OUTPUT
    // Guests: Anurag, Mithun, Alka, Prabir, Shivam, Farman 
    // string
