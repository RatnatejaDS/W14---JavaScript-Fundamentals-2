//  Imagine you are working for a social media company. You have a list of all the users. Your job is to create a
// function that checks if a specific username is in that list. The function should take the username as input and
// tell you whether it's present in the list of users or not.

// Sample list of users
const userList = ["user1", "user2", "user3", "user4", "user5"];

// Function to check if a username is in the list of users.
function isUsernameInList(username) {
    return userList.includes(username); // Use Array.includes() to check if the username is in the list.
}

// Example usage:
const usernameToCheck = "user35";
const result = isUsernameInList(usernameToCheck);

if (result) {
    console.log(`${usernameToCheck} is valid user.`); // Print a message if the username is in the list.
} else {
    console.log(`${usernameToCheck} is not valid user.`); // Print a message if the username is not in the list.
}


    //----------------------------------------------------//
         // OUTPUT
    // user35 is not valid user.