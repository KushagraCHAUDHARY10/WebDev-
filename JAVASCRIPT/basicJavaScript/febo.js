function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    //Write your code here:
    const febo = [];
    
    for(var i=0; i<n; i++){
        if(i===0){
            febo.push(0);
        }
        else if(i===1){
            febo.push(1);
        }
        else{
            var m = febo[i-2] + febo[i-1];
            febo.push(m);
        }
    }
    return febo;
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

