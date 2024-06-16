function smallLarge(arr){
    var smallest = arr[0];
    var largest = arr[0];

    for(let i=1; i < arr.length; i++){ 
        if(arr[i] < smallest){
            smallest = arr[i];
        }
        else if(arr[i] > largest){
            largest = arr[i];
        }
    }
   
    console.log("smallest : " +smallest);
    console.log("largest : " +largest);
}

var arr = [1,2,7,-3,4,5,9,8,11,23,8,23,34,78]
smallLarge(arr);

