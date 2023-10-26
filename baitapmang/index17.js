let arrs = [
    [5, 7, 2, 9],
    [2, 3],
    [4, 9, 10, 22]
]

let arrSum = []
function sumArr(mutilArr){
    for(i = 0; i < mutilArr.length; i++){
        let sum = 0;
        for(j = 0; j < mutilArr[i].length; j++){
            sum += mutilArr[i][j];
        }
        arrSum.push(sum)
    }

    let sortMax = arrSum.sort((a, b) => b - a);
    
    console.log(sortMax);
    sortMax = sortMax.join(", ");
    
    return sortMax;
}

console.log("Tổng lớn nhất theo thứ tự là: " + sumArr(arrs)); // str + [ ] = str