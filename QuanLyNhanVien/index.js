let DSNV = [];

let dsnvJson = localStorage.getItem("DSNV");

let arrayDsnv = JSON.parse(dsnvJson);

if(arrayDsnv) {
    DSNV = arrayDsnv.map((nv) => {
        return new NhanVien(
            nv.tknv,
            nv.name,
            nv.email,
            nv.password,
            nv.datepicker,
            nv.luongCB,
            nv.chucvu,
            nv.gioLam
        );
    });
    renderDSNV(DSNV);
};

const themNv = () => {
  let nhanVien =  layThongTinTuModal();
  DSNV.push(nhanVien);

  let dsnvJson = JSON.stringify(DSNV);
  localStorage.setItem("DSNV", dsnvJson);
  renderDSNV();
  $("#myModal").modal("hide");
}

const suaNv = (tknv) => {
    let index = DSNV.findIndex((nv) => {
        return nv.tknv == tknv;
      });
    let nhanVien = DSNV[index];
    $("#myModal").modal("show");
    showDataModal(nhanVien);
}

const capnhatNv = () => {
    // tìm  vị trí của sinh viên cần cập nhật
    let tknv = document.getElementById("tknv").value;
    let index = DSNV.findIndex((nv) => {
      return nv.tknv === tknv;
    });
    // cập nhật thông tin sinh viên tại vị trí index tìm được
    DSNV[index] = layThongTinTuModal();
    let dsnvJson = JSON.stringify(DSNV);
    localStorage.setItem("DSNV", dsnvJson);
    // render lại DSNV
    renderDSNV(DSNV);
    $("#myModal").modal("hide");
  };

  const xoaNv = () => {
    let tknv = document.getElementById("tknv").value;
    let index = DSNV.findIndex((nv) => {
      return nv.tknv === tknv;
    });
    DSNV.splice(index, 1);
    renderDSNV(DSNV);
  }