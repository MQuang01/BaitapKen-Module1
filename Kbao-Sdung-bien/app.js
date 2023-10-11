{
    let i = 10
    let f = 20.5
    let b = true
    let s = 'Hà Nội'

    document.write('i = ' + i)
    document.write('<br/>')
    document.write('f = ' + f)
    document.write('<br/>')
    document.write('b = ' + b)
    document.write('<br/>')
    document.write('s = ' + s)
    document.write('<br/>')    
} 

{
    let width = 20
    let height = 10
    let area = width * height
    document.write('Area = ' + area)
    document.write('<br/>')
}

{
    let a = prompt("Nhap so thu nhat : ")
    let b = prompt("Nhap so thu hai : ")

    if(a % b == 0){
        alert("a la boi so cua b")
    }else {
        alert("a khong phai la boi so cua b")
    }
}