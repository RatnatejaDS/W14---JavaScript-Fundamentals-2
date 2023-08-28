// Let’s say you are working for an event management company. As a web developer, you need to build a
// countdown timer for an upcoming event. You need to build a function that calculates the number of days
// between the current date and the event's start date

// Function to calculate the number of days between two dates
function calculateDaysUntilEvent(eventDate) {
    // Get the current date
    const currentDate = new Date();

    // Split the event date string into day, month, and year components
    const [eventDay, eventMonth, eventYear] = eventDate.split('-').map(Number);

    // JavaScript uses 0-based indexing for months, so subtract 1 from the eventMonth
    const adjustedEventMonth = eventMonth - 1;

    // Create a Date object for the event date
    const eventDateObject = new Date(eventYear, adjustedEventMonth, eventDay);

    // Calculate the time difference in milliseconds
    const timeDifference = eventDateObject - currentDate;

    // Calculate the number of days by dividing the time difference by the number of milliseconds in a day
    const daysUntilEvent = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Get the day, month, and year components
    const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero if necessary
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add 1 to month (0-based) and add leading zero if necessary
    const year = currentDate.getFullYear();

    // Create the DD-MM-YYYY formatted date string
    const formattedDate = `${day}-${month}-${year}`;

    return `Today : ${formattedDate} - Days until the event: ${daysUntilEvent} days`;
}

// Define the event's start date (in DD-MM-YYYY format)
const eventStartDate = "31-12-2023";

// Call the function to calculate the number of days until the event
const daysUntilEvent = calculateDaysUntilEvent(eventStartDate);

// Print the result
console.log(daysUntilEvent);


//----------------------------------------------------//
         // OUTPUT
        //  Today : 29-08-2023 - Days until the event: 123 days