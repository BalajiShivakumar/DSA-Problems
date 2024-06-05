function floor32(N){
    var floorValue = Math.floor(32/N);
    var originalValue = (32/N);
    console.log("Original value = " +originalValue);   
    console.log("floor Value = " +floorValue);
   

    if(N == 0){
        console.log(-1);
    }
    else if(floorValue == 0){
        console.log("Too Low");
    }
    else{
        console.log("x");
    }
}

floor32(500);