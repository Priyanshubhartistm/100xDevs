/*
- Assignment #3
Write a function called canVote that returns true or false if the age of a user is > 18
*/

// function isLegal(age) {
//     if(age > 18) {
//         console.log("you are allowed to vote");
//         return true;
//     } else {
//         console.log("you are not allowed to vote");
//         return false;
//     }
// }

// isLegal(20);
// isLegal(66);


function canvote(age) {
    if (age > 18) {
        console.log("u are eligible");   
    }else{
        console.log("u are not allowed to vote");
    }
}

canvote(10);