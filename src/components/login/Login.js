import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const getData = (e) => {
    const { value, name } = e.target;
    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // alert(data.message);
        if (data.message !== "Đăng nhập thành công") {
          alert(data.message);
        } else {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("role", data.user.role);
          localStorage.setItem("token", data.accessToken);
          navigate("/");
        }
        // if (data.user) {
        //   localStorage.setItem("user", JSON.stringify(data.user));
        //   localStorage.setItem("role", data.user.role);
        //   localStorage.setItem("token", data.accessToken);
        //   navigate("/");
        // }
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="container mt-3">
      <h3>hello2</h3>
      <section className="d-flex justify-content-between">
        <div className="left-data mt-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Đăng nhập</h3>
          <form>
            <div className="mb-3 col-lg-6">
              <input
                type="email"
                placeholder="enter your email?"
                className="form-control"
                id="exampleInputEmail1"
                onChange={getData}
                name="email"
              />
            </div>
            <div className="mb-3 col-lg-6">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                onChange={getData}
                name="password"
              />
            </div>
            <button
              type="submit"
              onClick={addData}
              className="btn btn-primary col-lg-6"
            >
              Submit
            </button>
          </form>
          <p className="mt-3">
            Already Have an Account{" "}
            <span>
              <Link to="/register">Đăng ký</Link>
            </span>
          </p>
        </div>
        <div className="right-data ">
          <div className="sign-img ">
            <img
              src="https://www.itbriefcase.net/wp-content/uploads/2020/12/hello2-1024x642.jpeg"
              style={{ maxWidth: 480 }}
              alt=""
            ></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
