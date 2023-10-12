function handleBtnClick(btn) {
    if (btn == 'AC') {
        document.querySelector(".container input[type='text']").value = '';
    } else if (btn == '=') {
        let txt = document.querySelector(".container input[type='text']").value;
        if (bieuThucHopLe(txt) && txt != '') {
            let result = eval(txt);
            document.querySelector(".container input[type='text']").value = result;
        }
        // else if ( txt == '' && btn == 0) {
        //     document.querySelector(".container input[type='text']").value = txt;
        // } 
        else {
            alert('Error');
            document.querySelector(".container input[type='text']").value = '';
        }
    }
    else if (btn === 'DEL') {
        let txt = document.querySelector(".container input[type='text']").value;
        txt = txt.slice(0, -1);
        document.querySelector(".container input[type='text']").value = txt;
    } else {
        let txt = document.querySelector(".container input[type='text']").value;
        txt += btn;
        document.querySelector(".container input[type='text']").value = txt;
    }
}

function bieuThucHopLe(bieuThuc) {
    const stack = [];
    const operators = "+-*/";

    for (let i = 0; i < bieuThuc.length; i++) {
        const char = bieuThuc[i];

        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            if (!stack.length) {
                return false; // Dấu ngoặc đóng không có dấu ngoặc mở tương ứng
            }
            const top = stack.pop();
            if (
                (char === ")" && top !== "(") ||
                (char === "}" && top !== "{") ||
                (char === "]" && top !== "[")
            ) {
                return false; // Dấu ngoặc không đúng cặp
            }
        } else if (operators.includes(char) || (i === 0 && char === "-")) {
            if (
                (i === 0 && (bieuThuc.length === 1 || operators.includes(bieuThuc[i + 1]))) ||
                (i === bieuThuc.length - 1 && (char === "-" || operators.includes(bieuThuc[i - 1]))) ||
                (i > 0 && i < bieuThuc.length - 1 && operators.includes(bieuThuc[i - 1]) && operators.includes(bieuThuc[i + 1]))
            ) {
                return false; // Toán tử không đứng đúng vị trí hoặc không đúng cú pháp
            }
        } else if (i === 0 && !/\d/.test(char)) {
            return false; // Ký tự đầu không phải số hoặc dấu trừ
        }
    }

    return stack.length === 0;
}