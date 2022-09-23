box1 = document.getElementById("box1");
box2 = document.getElementById("box2");
kq = document.getElementsByName("compare")
function comparebox(){
    if(this.box1.value.length == this.box2.value.length){
        for(let i =0;i<kq.length;i++){
            if(i==1){
                kq[i].checked =true;
            }else {
                kq[i].checked =false;
            }
        }
    }else if(this.box1.value.length > this.box2.value.length){
        for(let i =0;i<kq.length;i++){
            if(i==0){
                kq[i].checked =true;
            }else {
                kq[i].checked =false;
            }
        }
    }else{
        for(let i =0;i<kq.length;i++){
            if(i==2){
                kq[i].checked =true;
            }else {
                kq[i].checked =false;
            }
        }
    }
}