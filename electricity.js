function electricity(N){
    if(N<=230){
        var unit = (N-80)/3;
        var total = unit;
    }
    else if(N<=730){
        var unit = (N-230)/5;
        var total = unit + 50;
    }
    else{
        var unit = (N-730)/10;
        var total = unit + 150;
    }

    console.log("Total units used : " + total);
}

electricity(500);