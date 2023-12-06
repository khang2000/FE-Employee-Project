import React, { useEffect } from "react";
import { useState } from "react";
import Main from "../../components/main/main";
import HeaderTable from "./HeaderTable";
import Header from "../../components/header/header";
import { useNavigate } from "react-router-dom";
import UserModal from "../../components/UserModal/UserModal";

const Homepage = () => {
  const token = localStorage.getItem("token");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }

    fetch("http://localhost:8000/api/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body: JSON.stringify(users),
    })
      .then((response) => response.json())
      .then((data) => {
        //xu ly logic neu can
        console.log(data);
        // data.data.password = undefined;
        setUsers(data.data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  // SEARCH
  const [search, setSearch] = useState("");

  // UPDATE

  const [userModal, setUserModal] = useState({
    userName: "",
    id_number: "",
    birthday: "",
    addressBorn: "",
    image: "",
    position: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isOpenModal, setOpenModal] = useState(false);
  const handleOpenModal = (_id) => {
    fetch(`https://employee-wed.onrender.com/api/user/${_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //xu ly logic neu can
        console.log(data);
        setUserModal(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setOpenModal(!isOpenModal);
  };
  const closeModal = (_id) => {
    setOpenModal(!isOpenModal);
  };
  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState("3");
  const lastIndex = currentPage * recordsPerPage;
  const fisrtIndex = lastIndex - recordsPerPage;
  const records = users.slice(fisrtIndex, lastIndex);
  const npage = Math.ceil(users.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  // show number of person
  const option = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
  ];
  function handleSelect(e) {
    setRecordsPerPage(e.target.value);
  }
  return (
    <div className="Homepage">
      <Header />
      <div className="user">
        <div className="nav">
          <form>
            <label for="user">Hiển thị</label>
            <select onChange={handleSelect}>
              {option.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </form>

          <form>
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm"
            ></input>
          </form>
        </div>

        <table
          className={
            isOpenModal
              ? "table table-striped class-example"
              : "table table-striped"
          }
        >
          <HeaderTable />
          {records
            .filter((user) => {
              return search.toLowerCase() === ""
                ? user
                : user.userName.toLowerCase().includes(search);
            })
            .map((user, index) => {
              return (
                <Main
                  user={user}
                  index={index}
                  handleOpenModal={handleOpenModal}
                />
              );
            })}
        </table>
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
        {isOpenModal && (
          <div className="center-screen">
            <UserModal
              handleOpenModal={handleOpenModal}
              userModal={userModal}
              closeModal={closeModal}
            />
          </div>
        )}
      </div>
    </div>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default Homepage;
