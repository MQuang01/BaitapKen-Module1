function handleClickEye() {
    let eyeIcon = document.querySelector(".eye i");
    if(eyeIcon.classList.contains("fa-eye")){
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash")
    }else if(eyeIcon.classList.contains("fa-eye-slash")){
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye")
    }
    let statusPsw = document.querySelector(".form-password");
    statusPsw.classList.toggle("open")
    if(statusPsw.classList.contains("open")){
        statusPsw.querySelector("input").type = "text";
    }else {
        statusPsw.querySelector("input").type = "password"
    }
}