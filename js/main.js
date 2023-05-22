function getEle(id){
    return document.getElementById(id);
}

var dsnv = new DSNV();

getLocalStorage();

function layThongTinNV(isAdd) {
   
    //Lấy thông tin từ user
    var _taiKhoan = getEle("tknv").value;
    var _hoTen = getEle("name").value;
    var _email = getEle("email").value;
    var _matKhau = getEle("password").value;
    var _ngayLam = getEle("datepicker").value;
    var _luongCB = getEle("luongCB").value;
    var _chucVu = getEle("chucvu").value;
    var _gioLam = getEle("gioLam").value;
    


//  validation

var isValid = true;
var validation = new Validation();
// tài khoản
if(isAdd){
    isValid &= validation.kiemTraRong(_taiKhoan, "tbTKNV","Vui lòng nhập tài khoản") && validation.kiemTraDoDaiKiTu(_taiKhoan, "tbTKNV","Nhập từ 4-6 kí tự",4,6) && validation.kiemTraTKTonTai(_taiKhoan, "tbTKNV","Tài khoản đã tồn tại",dsnv.arr) && validation.kiemTraPattern(_taiKhoan,"tbTKNV","Vui lòng nhập số",/^[0-9]+$/);
     }
// tên
isValid &= validation.kiemTraRong(_hoTen, "tbTen","Vui lòng nhập tên ")&& validation.kiemTraChuoiKiTu(_hoTen, "tbTen","Vui lòng nhập chuỗi kí tự");

// email
isValid &= validation.kiemTraRong(_email, "tbEmail","Vui lòng nhập email") && validation.kiemTraPattern(_email, "tbEmail","Vui lòng nhập email hợp lệ", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

//  mật khẩu
isValid &= validation.kiemTraRong(_matKhau, "tbMatKhau","Vui lòng nhập mật khẩu")&& validation.kiemTraPattern(_matKhau, "tbMatKhau","Vui lòng nhập mật khẩu hợp lệ (chứa ít nhất 1 kí tự số, 1 kí tự in hoa, 1 kí tự đặc biệt", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/) && validation.kiemTraDoDaiKiTu(_matKhau,"tbMatKhau","Nhập từ 6 - 10 kí tự",6,10);

// ngày làm
isValid &= validation.kiemTraRong(_ngayLam,"tbNgay","Vui lòng nhập ngày làm");

// lương cơ bản
isValid &= validation.kiemTraRong(_luongCB, "tbLuongCB","Vui lòng nhập lương cơ bản")&& validation.kiemTraPattern(_luongCB,"tbLuongCB","Vui lòng nhập số",/^[0-9]+$/) && validation.kiemTraLuongCB(_luongCB,"tbLuongCB","Nhập từ 1 triệu đến 20 triệu",1000000,20000000 );

// chức vụ
isValid &= validation.kiemTraChucVu("chucvu","tbChucVu","Vui lòng chọn chức vụ");

// giờ làm
isValid &= validation.kiemTraRong(_gioLam,"tbGiolam","Nhập giờ làm") && validation.kiemTraGioLam(_gioLam,"tbGiolam","Nhập từ 80 đến 200",80,200);


if(!isValid) return null;
    var nv = new NhanVien(_taiKhoan, _hoTen, _email, _matKhau, _ngayLam, _luongCB, _chucVu, _gioLam);
nv.tinhTong();
nv.xepLoai();

return nv;


}

// rendertable
function renderTable(data) {
    var content = "";

    for (var i = 0; i < data.length; i++) {
        var nv = data[i];

        content += `
        <tr>
        <td>${nv.taiKhoan} </td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngayLam}</td>
        <td>${nv.chucVu}</td>
        <td>${nv.tong}</td>
        <td>${nv.loai}</td>
        
        <td>
        <button class="btn btn-danger" onclick ="deleteNV('${nv.taiKhoan}')">delete</button>
        </td>
        

        </tr> `;
    }


    getEle("tableDanhSach").innerHTML = content;

}

// thêm nv
getEle("btnThemNV").addEventListener("click", function(){
var nv = layThongTinNV(true);

if(nv != null){
    dsnv.themNV(nv);
    renderTable(dsnv.arr);
    setLocalStorage();
}

});

// cập nhật nv
getEle("btnCapNhat").addEventListener("click",function(){
    var nv =layThongTinNV(false);
    console.log(nv);
    dsnv.updateNV(nv);
    renderTable(dsnv.arr);
    setLocalStorage();
});

// sửa nv
function editNV(taiKhoan) {
    
    var nv = dsnv.layThongTinNV(taiKhoan);
    
    if (nv) {
        getEle("tknv").value = nv.taiKhoan;
       getEle("tknv").disabled = true;
        nv.hoTen = getEle("name").value;
        nv.email = getEle("email").value;
        nv.matKhau = getEle("password").value;
        nv.ngayLam = getEle("datepicker").value;
        nv.luongCB = getEle("luongCB").value;
        nv.chucVu = getEle("chucvu").value;
        nv.gioLam = getEle("gioLam").value;
        
    }
    
    getEle("btnCapNhat").style.display = "inline-block";
    
    getEle("btnThemNV").style.display = "none";
}

// xoá
function deleteNV(taiKhoan) {
    console.log(dsnv.arr);
    dsnv.xoaNV(taiKhoan);
    console.log(dsnv.arr);
    renderTable(dsnv.arr);
    setLocalStorage();
}


getEle("searchName").addEventListener("keyup",function(){
    var keyword = getEle("searchName").value;
    var mangTimKiem = dsnv.timKiemNV(keyword);
    renderTable(mangTimKiem);
})







function setLocalStorage() {
    //  convert Json => String
    var dataString = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", dataString);
}

function getLocalStorage() {
    // check
    if (localStorage.getItem("DSNV")) {
        var dataString = localStorage.getItem("DSNV");
       
        dsnv.arr = JSON.parse(dataString);
        // rendertable
        renderTable(dsnv.arr);
    }

}