// declare function ( ta phải viết function để định nghĩa nó rồi phải gọi để xác định nó (gọi xác định có thể trước hoặc sau khi khai báo function))
text1 = document.getElementById("text1")
function setFocus(e){
    window.alert("Bạn đã hủy bỏ việc gửi bản điều tra");
    // this.text1.focus();
    this.form.text.focus();// form có thể là name hoặc id (text cũng như vậy)
}
function request(){
        if (this.form.cbDog?.checked) {
            if (this.form.txtDog?.value.length == 0) {
                alert("Bạn phải nhập tên con vật mình yêu quý");
                this.form.txtDog?.focus(); //? là 1 hàm if tắt để kiếm tra txtDog có hay không
                return false;
            }
            var i = 0;
            this.form.radiodog.forEach(e => {
                if (e?.checked) {
                    i++;
                }
            })
            if (i == 0) {
                alert("Bạn phải chọn màu lông cho con vật yêu quý của bạn");
                return false;
            }
        } else if (this.form.cbCat?.checked) {
            if (this.form.txtCat?.value.length == 0) {
                alert("Bạn phải nhập tên con vật mình yêu quý");
                this.form.txtCat?.focus(); //? là 1 hàm if tắt để kiếm tra txtDog có hay không
                return false;
            }
            var i = 0;
            this.form.radioCat.forEach(e => {
                if (e?.checked) {
                    i++;
                }
            })
            if (i == 0) {
                alert("Bạn phải chọn màu lông cho con vật yêu quý của bạn");
                return false;
            }
        }
        if (!this.form.cbDog?.checked && !this.form.cbCat?.checked) {
            alert("Bạn phải chọn ít nhất một con vật");
            return false;
        }
        return true;
}
//setFocus();
// request();
// btnhuy = document.getElementById("huybtn")
// btnhuy.addEventListener("click",setFocus);
//  btngui = document.getElementById("guibtn")
//  btngui.addEventListener("submit",request);