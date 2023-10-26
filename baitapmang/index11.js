let arr1 = [1, 3, 5, 6];
let arr2 = [0, 3, 5, 6, 1, 9, 10];
let arr3 = [11, 3, 5, 22, 9, 2];

function checkParent(arrFirst, arrSecond){
    if(arrFirst.length > arrSecond.length){
        return false;
    }

    for(i = 0 ; i < arrFirst.length; i++){
        let flag = false;
        for(j = 0; j < arrSecond.length; j++){
            if(arrFirst[i] == arrSecond[j]){
                flag = true;
            }
        }
        if(flag == false){
            console.log("Không")
            return false;
        }
    }
    console.log("Có");
    return true;
}

checkParent(arr1, arr3)
