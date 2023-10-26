let arr1 = [2, 21, 44, -9, 11, -8, 6, 10];
let arr2 = [1, 3, 5, 6, 7, 9, 20];
let flag = true;

function checkSortArr(arr){
    for ( i = 0 ; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            flag = false
        }
    }
    
    if(flag){
        console.log("Hàm tăng");
    } else {
        console.log("Hàm không tăng")
    }
}

// checkSortArr(arr1);
checkSortArr(arr2);