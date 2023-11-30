import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditUser = (props) => {
  const token = localStorage.getItem("token");
  const { userModal, handleOpenModal } = props;
  const { id } = useParams();

  const [userName, setUserName] = useState(userModal.userName);
  const [id_number, setIdNumber] = useState(userModal.id_number);
  const [birthday, setBirthday] = useState(userModal.birthday);
  const [addressBorn, setAddressBorn] = useState(userModal.addressBorn);
  const [image, setImage] = useState(userModal.image);
  const [position, setPosition] = useState(userModal.position);
  const [email, setEmail] = useState(userModal.email);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  //   useEffect(() => {
  //     fetch(`http://localhost:8000/api/user/${userModal._id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         //xu ly logic neu can
  //         console.log(data);
  //         setUserName(data.data.userName);
  //         setIdNumber(data.data.id_number);
  //         setBirthday(data.data.birthday);
  //         setAddressBorn(data.data.addressBorn);
  //         setImage(data.data.image);
  //         setPosition(data.data.position);
  //         setEmail(data.data.email);
  //         setPassword(data.data.password ? password : "******");
  //         setConfirmPassword(
  //           data.data.confirmPassword ? confirmPassword : "******"
  //         );
  //       })
  //       .catch((error) => console.log(error.message));
  //   }, []);

  const formData = new FormData();
  formData.append("userName", userName);
  formData.append("image", image);
  formData.append("id_number", id_number);
  formData.append("birthday", birthday);
  formData.append("addressBorn", addressBorn);
  formData.append("position", position);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("confirmPassword", confirmPassword);
  const Update = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/api/user/${userModal._id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json",
        // Accept: "application/json",
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        //xu ly logic neu can
        console.log(data);
        alert(data.message);
      })
      .catch((error) => console.log(error.message));
    handleOpenModal();
    window.location.reload();
  };
  const option = [
    { label: "Lựa chọn", value: "" },
    { label: "Kế toán", value: "Kế toán" },
    { label: "Kỹ sư", value: "Kỹ sư" },
    { label: "Bảo vệ", value: "Bảo vệ" },
    { label: "Giám đốc", value: "Giám đốc" },
    { label: "HR", value: "HR" },
    { label: "Sale", value: "Sale" },
  ];
  return (
    <div>
      <div>
        <form className="row g-3" onSubmit={Update}>
          <div className="col-md-6">
            <label className="form-label">Họ và Tên</label>
            <input
              className="form-control"
              id="userName"
              placeholder="Enter your name"
              value={userName}
              name="userName"
              // onChange={onUserChange}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Số CMND</label>
            <input
              className="form-control"
              id="id_number"
              placeholder="Enter your id_number"
              value={id_number}
              name="id_number"
              // onChange={onUserChange}

              onChange={(e) => setIdNumber(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Ngày tháng năm sinh</label>
            <input
              className="form-control"
              id="birthday"
              placeholder="Enter your Date of Birth"
              value={birthday}
              name="birthday"
              // onChange={onUserChange}

              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              name="email"
              //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="inputAddress" className="form-label">
              Nơi Sinh
            </label>
            <input
              className="form-control"
              id="addressBorn"
              placeholder="Enter your Address born"
              value={addressBorn}
              name="addressBorn"
              // onChange={onUserChange}

              onChange={(e) => setAddressBorn(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label ">Chức vụ</label>
            <select
              className="form-control form-select"
              onChange={(e) => setPosition(e.target.value)}
              name="position"
              value={position}
              id="position"
              aria-label="Default select example"
            >
              {option.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Ảnh nhân viên
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              // onChange={handleUserUpdate}
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="col-12 password">
            <label htmlFor="inputAddress2" className="form-label">
              Password
            </label>
            <input
              type="text"
              className="form-control"
              id="password"
              placeholder="Enter your Image"
              value={userModal.password}
              name="password"
              // onChange={onUserChange}

              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="col-12 confirmPassword">
            <label htmlFor="inputAddress2" className="form-label">
              confirmPassword
            </label>
            <input
              type="text"
              className="form-control"
              id="confirmPassword"
              placeholder="Enter your confirmPassword"
              value={userModal.confirmPassword}
              name="confirmPassword"
              // onChange={onUserChange}

              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary ">
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
