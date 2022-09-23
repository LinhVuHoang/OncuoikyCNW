var btn = document.getElementById("submit")
var clicks =0;
function validRegex(str) {
    var regex = new RegExp('^([a-zA-Z]+_{0,2})+$');
    console.log(regex.test(str));
    return regex.test(str);
}
function validnumberphone(str){
    var regex = new RegExp('^\\(0(\\d){1,3}\\)\\d{6,9}$');
    console.log(regex.test(str));
    return regex.test(str);
}
function validate(){
    console.log("lỗi ở đây");
    var errorusername = document.getElementById("error-name");
    var errorsdt = document.getElementById("error-sdt");
    let checknumber =0;
    validRegex("Hoang.Linh");
    if(this.form.fname.value ===""){ // === so sánh cả kiểu dữ liệu
        errorusername.innerText = "Xin mời nhập tên học viên"
        this.form.fname.focus();
        checknumber++;
        console.log("lỗi");
    }else if(!this.validRegex(this.form.fname.value)){
        errorusername.innerText = "Tên học viên không được có cách trống, chỉ được phép nhập chữ, được phép có ký tự _, không được có số và các ký tự lạ."
        this.form.fname.focus();
        checknumber++;
    }
    else {
        errorusername.innerText = ""
        console.log("không lỗi");
    }
    if(this.form.fsdt.value ===""){
        errorsdt.innerText = "Xin mời nhập số điện thoại"
        this.form.fsdt.focus();
        checknumber++;
        console.log("lỗi")
    }else if(!this.validnumberphone(this.form.fsdt.value)){
        errorsdt.innerText = "Sai đinh dạng số điện thoại"
        this.form.fsdt.focus();
        checknumber++;
    } else {
        errorsdt.innerText = ""
        console.log("không lỗi");
    }
    if(checknumber ==0){
        alert("Dữ liệu nhập vào là hợp lệ");
        return true;
    }else {
        return false;
    }
}
//submit();
//nếu muốn regex với tiếng việt r'[aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz0-9_]+