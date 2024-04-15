// much faster version, seen from leetcode community - constant time;

var isPerfectSquare = function(num){

    return !String(num**0.5).includes(".");
}

var isPerfectSquare = function(num){
    return num**0.5 % 1 == 0
}

// var isPerfectSquare = function(num) {

//     let low = 1;
//     let high = num;

//     while (low <= high){

//         let middleNum = Math.floor((low + high) / 2);

//         if (middleNum * middleNum === num){
//             return true;
//         }

//         else if (middleNum * middleNum > num){
//             high = middleNum - 1;
//         }

//         else if (middleNum * middleNum < num){
//             low = middleNum + 1;
//         }
//     }
//     return false;
// };


console.log(isPerfectSquare(16));