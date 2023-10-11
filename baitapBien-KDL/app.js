function handleDTB() {
    let diemVly = +document.querySelectorAll('input')[0].value;
    let diemHoahoc = +document.querySelectorAll('input')[1].value;
    let diemSinhhoc = +document.querySelectorAll('input')[2].value;

    console.log(diemVly, diemHoahoc, diemSinhhoc)

    if (diemVly || diemHoahoc || diemSinhhoc != 0) {
        let avgPoint = (diemVly + diemHoahoc + diemSinhhoc) / 3;

        document.writeln('Diem trung binh la : ' + avgPoint.toFixed(2))
    } else {
        alert('Yeu cau nhap diem !')
    }

}

function handleChange() {
    let a = +document.querySelectorAll('input')[3].value;

    let doF = ((9 * a) / 5) - 32;
    document.write(doF + " do F")
}

function dienTichHinhTron() {
    let b = +document.querySelectorAll('input')[4].value;

    const soPi = 3.14;

    let dTich = b * b * soPi;

    document.write("Dien tich cua hinh tron la : " + dTich);
}

function chuViHinhTron() {
    let c = +document.querySelectorAll('input')[5].value;

    const soPi = 3.14;

    let cVi = c * 2 * soPi;

    document.write("Chu vi cua hinh tron la : " + cVi);
}