function Validation(){
    this.kiemTraRong = function(val, tbId, mess){


        if(val == ""){
            // sai
            getEle(tbId).style.display = "block";
            getEle(tbId).innerHTML = mess;
            return false;
    
        }
            // dung
            getEle(tbId).style.display = "none";
            getEle(tbId).innerHTML = "";
            return true;   
        


    };
    this.kiemTraDoDaiKiTu = function(val, tbId, mess, min, max){
        if(4 <= val.length && val.length <=10){
            getEle(tbId).style.display = "none";
            getEle(tbId).innerHTML = "";
            return true;  
        }
       
        getEle(tbId).style.display = "block";
            getEle(tbId).innerHTML = mess;
            return false;
    };

    this.kiemTraLuongCB = function(val, tbId, mess, min, max){
        if(1000000 <= val && val <= 20000000){
            getEle(tbId).style.display = "none";
            getEle(tbId).innerHTML = "";
            return true;  
        }
       
        getEle(tbId).style.display = "block";
            getEle(tbId).innerHTML = mess;
            return false;
    };
    this.kiemTraGioLam = function(val, tbId, mess, min, max){
        if(80 <= val && val <= 200){
            getEle(tbId).style.display = "none";
            getEle(tbId).innerHTML = "";
            return true;  
        }
       
        getEle(tbId).style.display = "block";
            getEle(tbId).innerHTML = mess;
            return false;
    };

    this.kiemTraChuoiKiTu = function(val, tbId, mess){
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if(val.match(letter)){
        getEle(tbId).style.display = "none";
        getEle(tbId).innerHTML = "";
        return true;  
        }
        getEle(tbId).style.display = "block";
        getEle(tbId).innerHTML = mess;
        return false;
    };
    this.kiemTraPattern = function(val, tbId, mess, pattern){
        
        if(val.match(pattern)){
            getEle(tbId).style.display = "none";
            getEle(tbId).innerHTML = "";
            return true;  
            }
            getEle(tbId).style.display = "block";
            getEle(tbId).innerHTML = mess;
            return false;
        
    };

    this.kiemTraChucVu = function (idSelect, tbId, mess){
        if (getEle(idSelect).selectedIndex != 0){
            getEle(tbId).style.display = "none";
            getEle(tbId).innerHTML = "";
            return true;  
            }
            getEle(tbId).style.display = "block";
            getEle(tbId).innerHTML = mess;
            return false;
    };
    
    this.kiemTraTKTonTai = function(val, tbId, mess, arr){
var exist = false;

for(var i=0; i< arr.length; i++){
    var nv = arr[i];
    if(nv.taiKhoan === val){
        exist = true;
        break;
    }
}
    if(exist){
        getEle(tbId).style.display = "block";
            getEle(tbId).innerHTML = mess;
            return false;
    }
    getEle(tbId).style.display = "none";
            getEle(tbId).innerHTML = "";
            return true;  
    }
}