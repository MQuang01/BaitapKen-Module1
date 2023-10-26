let arr = [1, -2, 0, 11, 15, 2, 22, 4, 6]

function findMaxFirst(arr){
    let arrEven = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] <= 0){
            continue;
        } else 
        if (arr[i] % 2 == 0 ) {
            // console.log(arr[i]);
            //break; // In ra chia 2 đầu tiền rồi thoát
            arrEven.push(arr[i])
        }
    }

    // console.log(arrEven)
    let max = arrEven[0];
    for(j = 1 ; j < arrEven.length; j++){
        if (arrEven[j] > max){
            max = arrEven[j];
        }
    }

    // console.log(max);
    return max;
}

console.log(findMaxFirst(arr));