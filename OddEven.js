function battleOfOddAndEven(n, arr){
    var evenSum = 0;
   var oddSum = 0;
   for(i=0; i<=n; i++){
       if(arr[i]%2 === 0){
           evenSum = evenSum + arr[i];
       }
       else{
           oddSum = oddSum + arr[i];
       }
   }
   if(evenSum > oddSum){
       console.log("Even");
   }
   else{
       console.log("odd");
   }
}

const n = 7;
const array = [1,2,3,4,5,6,7,8];
battleOfOddAndEven(n, array);