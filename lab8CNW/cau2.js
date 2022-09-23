var btn = document.getElementById("submit")
var clicks =0;

function validate(){
    console.log("lỗi ở đây");
    var errorusername = document.getElementById("error-name");
    var errorsdt = document.getElementById("error-sdt");
    let checknumber =0;

    if(this.form.fname.value === ""){ // === so sánh cả kiểu dữ liệu
        // errorusername.innerText = "Xin mời nhập tên học viên"
        checknumber++;
        console.log("lỗi");
    }else {
        errorusername.innerText = ""
        console.log("không lỗi");
    }
    if(this.form.fsdt.value ===""){
        errorsdt.innerText = "Xin mời nhập số điện thoại"
        checknumber++;
        console.log("lỗi")
    }else {
        errorsdt.innerText = ""
        console.log("không lỗi");
    }
    if(checknumber ==0){
        return true;
    }else {
        return false;
    }
}
//submit();