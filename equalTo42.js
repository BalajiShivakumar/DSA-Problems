function Equal42(arr){
    let number = 0;
    for(let i=0; i< arr.length; i++){
        if(arr[i] === 42){
            number = number + 1;
        }
    }
    if(number > 0){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}

arr = [12,24,4353,54,65.4,42]
Equal42(arr);