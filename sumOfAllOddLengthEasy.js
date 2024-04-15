var sumOddLengthSubarrays = function(arr) {

    let accum = 0;

    for (let i=0; i<arr.length; i++){
        for (let j=i; j<arr.length; j += 2){
            for (let k=i; k<=j; k++){
                accum += arr[k];
            }
        }

    }
    return accum;
}

let arr = [1,4,2,5,3,4]
console.log(sumOddLengthSubarrays(arr));


