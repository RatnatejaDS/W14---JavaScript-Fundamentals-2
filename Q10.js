// // as a web developer, your task is to build a function that examines a sentence and counts how many times
// each unique word appears in it. Using a Map, the function efficiently keeps track of the occurrence of each
// word in the sentence

function countWords(sentence) {
    // Split the sentence into words
    const words = sentence.split(/\s+/);

    // Create a Map to store word counts
    const wordCountMap = new Map();

    // Characters to consider as punctuation
    const punctuation = ['.', ',', '!', '?', ';', ':', '-', '(', ')', '[', ']'];

    // Loop through each word
    for (const word of words) {
        // Remove leading and trailing punctuation
        let cleanedWord = removePunctuation(word, punctuation);

        // Convert to lowercase
        cleanedWord = cleanedWord.toLowerCase();

        // If the word is not empty (after cleaning), increment its count in the Map
        if (cleanedWord !== "") {
            if (wordCountMap.has(cleanedWord)) {
                // Word already in Map, increment count
                wordCountMap.set(cleanedWord, wordCountMap.get(cleanedWord) + 1);
            } else {
                // Word not in Map, add with count 1
                wordCountMap.set(cleanedWord, 1);
            }
        }
    }

    return wordCountMap;
}

// Helper function to remove leading and trailing punctuation
function removePunctuation(word, punctuation) {
    let cleanedWord = word;
    while (cleanedWord && punctuation.includes(cleanedWord[0])) {
        cleanedWord = cleanedWord.slice(1);
    }
    while (cleanedWord && punctuation.includes(cleanedWord[cleanedWord.length - 1])) {
        cleanedWord = cleanedWord.slice(0, -1);
    }
    return cleanedWord;
}

// Example usage:
const sentence = "please please Submit your assignment on time, your assignments are important";
const wordCounts = countWords(sentence);

// Print the word counts
wordCounts.forEach((count, word) => {
    console.log(`"${word}" appears ${count} time(s)`);
});


// //----------------------------------------------------//
//          // OUTPUT

// "please" appears 2 time(s)
// "submit" appears 1 time(s)
// "your" appears 2 time(s)
// "assignment" appears 1 time(s)
// "on" appears 1 time(s)
// "time" appears 1 time(s)
// "assignments" appears 1 time(s)
// "are" appears 1 time(s)
// "important" appears 1 time(s)