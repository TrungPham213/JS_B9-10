function NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam){
    this.taiKhoan = _taiKhoan;
    this.hoTen = _hoTen;
    this.email = _email;
    this.matKhau = _matKhau;
    this.ngayLam = _ngayLam;
    this.luongCB = _luongCB;
    this.chucVu = _chucVu;
    this.gioLam = _gioLam;
    this.tong = 0;
    this.loai = "";

    this.tinhTong = function(){
        if(this.chucVu === "Sếp"){
            this.tong = Number(this.luongCB)*3;
        }else if(this.chucVu === "Trưởng phòng"){
            this.tong = Number(this.luongCB)*2;
        }else{
            this.tong = Number(this.luongCB);
        }
        return this.tong;
        
    };

    this.xepLoai = function(){
        if(this.gioLam >= 192){
            this.loai = "nhân viên xuất sắc";
        }else if(this.gioLam >=176){
            this.loai = "nhân viên giỏi";
        }else if(this.gioLam >= 160){
            this.loai = "nhân viên khá";
        }else {
            this.loai = "nhân viên trung bình";
        }
        return this.loai;
    };


};