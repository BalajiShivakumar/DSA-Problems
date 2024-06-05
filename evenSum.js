function evenSumProblem(N)
{
    var sum = 0;
    for(var i=1; i<=N; i++){
        console.log("Initial value of i = " + i);
        if(i%2==0){
            console.log("Value that is added to sum = " +i);
            sum = sum + i;
            console.log("Value after adding to value = " +i);
        }
    }
    console.log("Sum of even number = " +sum);
}

evenSumProblem(5);


