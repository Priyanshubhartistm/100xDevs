function isLegal(age) {
    if (age >= 18) {
        console.log("You are allowed to vote.");
    } else {
        console.log("You are not allowed to vote.");
    }
}

isLegal(20); // Output: You are allowed to vote.
isLegal(16); // Output: You are not allowed to vote.