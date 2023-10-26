let arr = [4, 11, 9, 8, -9, 16, -5, 36, 12];

arr.forEach(function(number){
    if(number > 0 && Math.sqrt(number) === Math.floor(Math.sqrt(number))){
        console.log(number);
    }
})