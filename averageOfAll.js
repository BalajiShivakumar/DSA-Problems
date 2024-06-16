function average(arr){
    let sum = 0;

    for(i=0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum);
    var roundOff = Math.ceil(sum);
    console.log(roundOff);
}

arr = [2,3,3.44,4.6,4.9,7.464]
average(arr);

