function changeMoney() {
    // let a = document.getElementById("#fromMoney").value; van dung duoc
    // let b =  document.getElementById("#toMoney").value;

    let a = document.querySelector('#fromMoney').value;
    let b = document.querySelector('#toMoney').value;
    let money = document.querySelector('input').value;

    console.log(a, b)

    if (money == 0) {
        alert("Nhap so tien can doi")
    } else {
        switch (a) {
            case "Viet Nam":
                if (b == 'USD') {
                    money = money / 23000;
                    document.write(money.toFixed(3) + " USD")
                } else {
                    document.write(money + "VND")
                }
                break;
            case "USD":
                if (b == "Viet Nam") {
                    money = money * 23000;
                    document.write(money.toFixed(3) + " VND")
                } else {
                    document.write(money + " USD")
                }
                break;
        }
    }    
}