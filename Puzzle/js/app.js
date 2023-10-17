
let images = [
    "../imgs/faker (1).jpg",
    "../imgs/ronaldo (1).jpg",
    "../imgs/messi (1).jpg"
]




function handleChange(ltn) {

    let imgEle = document.getElementById(`imgp${ltn}`);
    let prevSrc = imgEle.src;

    let availableImages = images.filter(function(img){
        return img != prevSrc;
    });

    let newSrc = document.getElementById(`imgp${ltn}`).src = availableImages[Math.floor(Math.random() * availableImages.length)];
    imgEle.src = newSrc;

    let srcP1 = document.querySelectorAll('img')[0].src;

    let divElements = document.querySelectorAll('.container div img');
    let flag = true;

    divElements.forEach(function (img) {
        if (srcP1 !== img.src) {
            flag = false;
        }
    });


    if (flag) {
        let divElements = document.querySelectorAll('.container div');
        divElements.forEach(function (div) {
            div.style.boxShadow = "2px 1px 5px 2px red";
        });
    } else {
        let divElements = document.querySelectorAll('.container div');
        divElements.forEach(function (div) {
            div.style.boxShadow = "2px 1px 5px 2px black";
        });
    }

}

