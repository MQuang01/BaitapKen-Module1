let arr = [
    [1, 3, 6 , 8, 9],
    [0, 2, -11, 21]
]

function checkIntNum(arr){
    let childArr = new Array();
    for(i = 0; i < arr.length; i++){
        childArr = arr[i];
        for(j = 0; j < childArr.length; j++){
            if(childArr[j] < 0){
                console.log("Không");
                return false
            }
        }
    }
    console.log("Có");
    return true
}

checkIntNum(arr)