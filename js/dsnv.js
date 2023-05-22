function DSNV() {
    this.arr = [];

    this.timViTri = function (taiKhoan) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
            var nv = this.arr[i]
            if (nv.taiKhoan === taiKhoan) {
                index = i;
                break;
            }
        }
        return index;
    };
    this.themNV = function (nv) {
        this.arr.push(nv);
    };
    this.xoaNV = function (taiKhoan) {
        var index = this.timViTri(taiKhoan);
        if(index != -1){
            this.arr.splice(index,1);
        }
    };
    this.layThongTinNV = function (taiKhoan) { 
        var index = this.timViTri(taiKhoan);
        if(index != -1){
        return this.arr[index];
        }
        return null;
    };
    this.updateNV = function (nv) { 
        var index = this.timViTri(nv.taiKhoan);
        if(index != -1){
            this.arr[index]=nv;
        }
    };
    
}

DSNV.prototype.timKiemNV = function(keyword){
/**
 * 1. tạo mảng
 * 2. duyệt mảng
 * 3. nv = arr[i]
 * 4. so sánh nv.tennv = keywoed
 * => true => thêm nv vào mảng
 * 5. trả mảng
 */

var mangTimKiem = [];
for(var i = 0; i< this.arr.length;i++){
    var nv = this.arr[i];
    //  chuyển keyword về chữ viết thường
   var keywordToLowerCase = keyword.toLowerCase();
    //  chuyển tên nv về chữ viết thường
    var loaiToLowerCase = nv.loai.toLowerCase();
    if(loaiToLowerCase.indexOf(keywordToLowerCase) !== -1 ){
        mangTimKiem.push(nv);
    }
}
return mangTimKiem;
}
