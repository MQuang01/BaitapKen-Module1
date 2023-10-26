function lietKeDongGiamDan(arr) {

    let result = []
    let list = [arr[0]]

    for (i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            result.push(list);
            list = [arr[i]];
        } else {
            list.push(arr[i]);
        }
    }

    result.push(list);

    result = result.filter(function(row){
        return row.length > 1;
    });

    for(j = 0 ; j < result.length; j++){
        console.log(result[j]);
    }

}

let arr = [10, 9, 7, 5, 12, 14, 13, 15, 2, 3, 4];
lietKeDongGiamDan(arr)