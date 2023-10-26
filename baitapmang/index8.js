let arr = [2, 21, 44, 88, -9, 11, -8, 6, 10];
let count = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] < 0 ){
        continue;
    }else if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
        count++;
    }
    
}


console.log(`Số lượng phần tử chẵn liền kề là ${count}`)