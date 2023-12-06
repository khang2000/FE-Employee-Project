import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

const Main = (props) => {
  const token = localStorage.getItem("token");
  const { user, index, handleOpenModal } = props;
  const onDeleteTodo = (id) => {
    if (user.role === "admin") {
      alert("Bạn là admin nên không thể tự xóa");
    } else {
      fetch(`http://localhost:8000/api/user/${id}`, {
        method: "DELETE",
        headers: {
          // Authorization: `Bearer ${token}`,

          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          //xu ly logic neu can
          console.log(data);

          if (data.message !== "xóa người dùng thành công") {
            alert(data.message);
          } else {
            window.location.reload();
          }
        })
        .catch((error) => console.log(error.message));
    }
  };
  return (
    <tbody>
      <tr key={index}>
        <td scope="row">{index + 1}</td>

        <td>{user.userName}</td>
        <td>{user.email}</td>

        <td>
          {/* <Link to={`/user/${user._id}`}>
            <FaEye />
          </Link> */}
          <FaEye
            onClick={() => {
              handleOpenModal(user._id);
            }}
          />
        </td>
        <td>
          <Link className="link-dark" to={`/update_user/${user._id}`}>
            <FaPencilAlt />
          </Link>
          {/* <FaPencilAlt
            onClick={() => {
              handleOpenModal(user._id);
            }}
          /> */}
        </td>
        <td>
          <FaTrashAlt
            onClick={(e) => {
              onDeleteTodo(user._id);
            }}
          />
        </td>
      </tr>
    </tbody>
  );
};

export default Main;
