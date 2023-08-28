// Imagine you are given a list of student objects, each containing the student's name and their marks. Your
// task is to create a function that checks results by filtering out students whose score is more than 90 and
// prints a message saying, "Congratulations [Student Name]! You have cleared the exam."

// Function to check and print congratulations for students with scores more than 90.
function checkResults(studentList) {
    // Initialize an empty array to store successful students.
    const successfulStudents = [];

    // Loop through the student list.
    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i];

        // Check if the student's marks are more than 90.
        if (student.marks > 90) {
            // If yes, add the student to the list of successful students.
            successfulStudents.push(student);

            // Print a congratulatory message.
            console.log(`Congratulations ${student.name}! You have cleared the exam. !!`);
        }else {
            console.log(`Sorry ${student.name} you have not cleared the exam !!!!`);
        }
    }
}

// Example student list with name and marks.
const students = [
    { name: "Mithun", marks: 95 },
    { name: "prabir", marks: 75 },
    { name: "Alka", marks: 92 },
    { name: "Shivam", marks: 70 },
    {name: 'Farman' , marks: 99}
];

// Call the function to check and print results.
checkResults(students);

//----------------------------------------------------//
            //OUTPUT
    // Congratulations Mithun! You have cleared the exam. !!
    // Sorry prabir you have not cleared the exam !!!!
    // Congratulations Alka! You have cleared the exam. !!
    // Sorry Shivam you have not cleared the exam !!!!
    // Congratulations Farman! You have cleared the exam. !!
