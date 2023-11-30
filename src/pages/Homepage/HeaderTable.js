import React from "react";

const HeaderTable = () => {
  return (
    <thead className="table-primary">
      <tr>
        <th className="Stt" scope="col">
          STT
        </th>
        <th scope="col">Tên nhân viên</th>
        <th scope="col">Email</th>
        <th scope="col">Xem</th>
        <th scope="col">Sửa</th>
        <th scope="col">Xóa</th>
      </tr>
    </thead>
  );
};

export default HeaderTable;
