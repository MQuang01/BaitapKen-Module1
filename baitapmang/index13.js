//Kiểm tra một cột ma trận có giảm dần hay không

let arr1 = [0, 7, 2, 5, 9]
let arr2 = [8, 6, 3, 1]

function checkSort(arr) {
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            console.log("Không");
            return false
        }
    }
    console.log("Có");
    return true
}

checkSort(arr2)