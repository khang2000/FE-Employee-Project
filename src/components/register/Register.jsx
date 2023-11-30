import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const navigate = useNavigate();
  // const [data, setData] = useState({
  //   userName: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  //   addressBorn: "",
  //   birthday: "",
  //   id_number: "",
  //   position: "",
  //   image: "",
  // });
  const [userName, setUserName] = useState();
  const [id_number, setIdNumber] = useState();
  const [birthday, setBirthday] = useState();
  const [addressBorn, setAddressBorn] = useState();
  // const [file, setFile] = useState();
  const [image, setImage] = useState();

  const [position, setPosition] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  // const getData = (e) => {
  //   const { value, name } = e.target;
  //   setData(() => {
  //     return {
  //       ...data,
  //       [name]: value,
  //     };
  //   });
  // };
  // function convertToBase64(e) {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(e.target.files[0]);
  //   reader.onload = () => {
  //     console.log(reader.result);
  //     setImage(reader.result);
  //   };
  //   reader.onerror = (error) => {
  //     console.log("Error:", error);
  //   };
  // }

  const addData = (e) => {
    e.preventDefault();
    // const user = {
    //   userName,
    //   id_number,
    //   birthday,
    //   addressBorn,
    //   image,
    //   position,
    //   email,
    //   password,
    //   confirmPassword,
    // };
    const formData = new FormData();

    formData.append("image", image);
    formData.append("userName", userName);
    formData.append("id_number", id_number);
    formData.append("birthday", birthday);
    formData.append("addressBorn", addressBorn);
    formData.append("position", position);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      //   Accept: "application/json",
      //   "Access-Control-Allow-Origin": "*",
      // },

      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        //xu ly logic neu can
        console.log(data);
        if (data.message !== "Đăng ký thành công") {
          alert(data.message);
        } else {
          console.log(data);
          alert(data.message);
          navigate("/login");
        }
      })
      .catch((error) => console.log(error.message));

    // axios
    //   .post("http://localhost:8000/api/auth/signup", formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data.message);
    //     alert(res.data.message);
    //     // if (res.data.message !== "Successful!") {
    //     //   alert(res.data.message);
    //     // } else {
    //     //   console.log(res);
    //     //   alert(res.data.message);
    //     //   navigate("/login");
    //     // }
    //   })
    //   .catch((error) => console.log(error.message));
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
      <div className="register-form ">
        <h3 className="text-center ">Đăng ký</h3>
        <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Họ và Tên</label>

            <input
              type="text"
              placeholder="enter your name?"
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
              // onChange={getData}
              name="userName"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="enter your email?"
              onChange={(e) => setEmail(e.target.value)}
              // onChange={getData}
              name="email"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
              // onChange={getData}
              name="password"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Nhập lại mật khẩu</label>

            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="********"
              onChange={(e) => setConfirmPassword(e.target.value)}
              // onChange={getData}
              name="confirmPassword"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Ngày tháng năm sinh</label>
            <input
              type="text"
              id="birthday"
              className="form-control"
              placeholder="ngày tháng năm sinh"
              onChange={(e) => setBirthday(e.target.value)}
              // onChange={getData}
              name="birthday"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Quê quán</label>
            <input
              type="text"
              id="addressBorn"
              className="form-control"
              placeholder=""
              onChange={(e) => setAddressBorn(e.target.value)}
              // onChange={getData}
              name="addressBorn"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Số CMND</label>
            <input
              type="text"
              id="id_number"
              className="form-control"
              placeholder=""
              onChange={(e) => setIdNumber(e.target.value)}
              // onChange={getData}
              name="id_number"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Ảnh</label>
            <input
              // accept="image/*"
              type="file"
              id="image"
              className="form-control"
              onChange={(e) => setImage(e.target.files[0])}
              // onChange={convertToBase64}
              // name="image"
            />
            {/* {image === "" || image == null ? (
              ""
            ) : (
              <img width={100} height={100} src={image} />
            )} */}
          </div>
          <div className="col-md-6">
            <label className="form-label ">Chức vụ</label>
            <select
              className="form-control form-select"
              onChange={(e) => setPosition(e.target.value)}
              // onChange={getData}
              name="position"
              id="position"
              aria-label="Default select example"
            >
              {option.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" onClick={addData} className="btn btn-primary ">
            Submit
          </button>
        </form>
        <p className="mt-3">
          Already Have an Account{" "}
          <span>
            <Link to="/login">Đăng nhập</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Home;
