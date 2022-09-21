function validate(){
    // var cbDog = document.getElementById("cbDog")
    // if (!this.form.cbDog.checked){
    //     alert("Xin mời nhập checkbox")
    // }
    let radio = 0;
    if(this.form.cbDog?.checked){
        if(!this.form.txtDog?.value.trim().length)
        {
            alert("Bạn phải nhập tên con vật bạn yêu thích");
            f.txtDog.focus();
            return false;
        }
        this.form.colorDog.forEach(e => {
            if(e?.checked) radio ++;
        });
        if(radio == 0){
            alert("Bạn phải chọn màu lông");
            return false;
        }

    }
}
function submit(){
    alert("Không có lỗi");
    console.log("Hiện rồi");
    return true;
}
function myFunction(p1,p2) {
    console.log(p1*p2);
    return p1 * p2;
}
submit();
console.log("Ready")