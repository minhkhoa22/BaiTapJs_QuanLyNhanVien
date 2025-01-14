class NhanVien  {
    constructor(_tknv, _name, _email, _password, _datepicker, _luongCB, _chucvu, _gioLam) {
        this.tknv = _tknv;
        this.name = _name;
        this.email = _email;
        this.password = _password;
        this.datepicker = _datepicker;
        this.luongCB = _luongCB;
        this.chucvu = _chucvu;
        this.gioLam = _gioLam;
    }

    tongLuong() {
        if(this.chucvu == "Sếp") {
            return this.luongCB * 3;
        }
        if(this.chucvu == "Trưởng phòng") {
            return this.luongCB * 2;
        }
        if(this.chucvu == "Nhân viên") {
            return this.luongCB * 1;
        }
    }

    xepLoai() {
        if (this.gioLam >= 192) {
            return "Xuất sắc"
        }
        else if (this.gioLam >= 176) {
            return "Giỏi"
        }
        else if (this.gioLam >= 160) {
            return "Khá"
        }
        else {
            return "Trung Bình"
        }
    }
}