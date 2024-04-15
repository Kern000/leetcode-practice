var lengthOfLastWord = function(s) {
    let processedString = s.trim();
    let length = 0;
    for (let i= processedString.length-1; i>=0; i--){
        if(processedString[i] !== " "){
            length++;
        } else {
            break;
        }
    } 
    console.log(length);
    return length;
};

// -- Slower Method --
// var lengthOfLastWord = function(s) {
//     let processedString = s.trim();
//     let splitArray = processedString.split(" ");
//     let target = splitArray.pop(splitArray.length-1).trim();
//     let charLength = target.length;    
//     console.log(length);
//     return charLength;
// };

let word = "   fly me   to   the moon  ";

lengthOfLastWord(word);