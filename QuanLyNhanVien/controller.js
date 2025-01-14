const layThongTinTuModal = () =>{
    let tknv = document.getElementById("tknv").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let datepicker = document.getElementById("datepicker").value;
    let luongCB = document.getElementById("luongCB").value * 1;
    let chucvu = document.getElementById("chucvu").value;
    let gioLam = document.getElementById("gioLam").value * 1;

    let nhanVien = new NhanVien(
        tknv,
        name,
        email,
        password,
        datepicker,
        luongCB,
        chucvu,
        gioLam,
    )

    return nhanVien;
}

const renderDSNV = () => {
    let contentHTML = "";

    for(let i = 0 ; i < DSNV.length; i++) {
        let nhanVien = DSNV[i];
        let tr = ` <tr>
        <td>${nhanVien.tknv}</td>
        <td>${nhanVien.name}</td>
        <td>${nhanVien.email}</td>
        <td>${nhanVien.datepicker}</td>
        <td>${nhanVien.chucvu}</td>
        <td>${nhanVien.tongLuong()}</td>
        <td>${nhanVien.xepLoai()}</td>
        <td><button onclick="suaNv('${nhanVien.tknv}')">Sửa</button> 
        <button onclick="xoaNv('${nhanVien.tknv}')">Xoá</button></td>
      </tr>`;

      contentHTML += tr;
    }
    document.getElementById("tableDanhSach").innerHTML = contentHTML;
}

const showDataModal = (nv) => {
    document.getElementById("tknv").value = nv.tknv;
    document.getElementById("name").value = nv.name;
    document.getElementById("email").value = nv.email;
    document.getElementById("password").value = nv.password;
    document.getElementById("datepicker").value = nv.datepicker;
    document.getElementById("luongCB").value = nv.luongCB;
    document.getElementById("chucvu").value = nv.chucvu;
    document.getElementById("tknv").gioLam = nv.gioLam;
}