import React from "react";
import user_avatar from "../images/user_avatar.png";
import {} from "react-icons/fa";

const UserModal = (props) => {
  const { userModal } = props;
  return (
    <form>
      <button
        onClick={() => {
          props.closeModal();
        }}
      ></button>
      <div className="infor-user-modal">
        <div className="user-modal-avatar">
          <img
            src={
              userModal
                ? `http://localhost:8000/${userModal.image}`
                : user_avatar
            }
          ></img>
          <h4>{userModal ? userModal.userName : "chưa có thông tin"}</h4>
        </div>
        <div className="infor-user-text">
          <h5>
            Số CCCD/CMND:
            {userModal ? userModal.id_number : "chưa có thông tin"}
          </h5>

          <h5>
            Ngày sinh: {userModal ? userModal.birthday : "chưa có thông tin"}
          </h5>

          <h5>
            Địa chỉ: {userModal ? userModal.addressBorn : "chưa có thông tin"}
          </h5>
          <h5>
            Chức vụ: {userModal ? userModal.position : "chưa có thông tin"}
          </h5>
          <p>
            I love playing badminton in my spare time. I spend a lot of my free
            time playing badminton after finishing my homework. I was so
            interested in playing badminton from my childhood and started
            learning to play when I was 7 years old. When I was 8 years old, my
            dad told my teacher about my hobby of badminton. My teacher told my
            dad that there was a facility for playing sports daily in school so
            he could admit his child. Now, I enjoy playing badminton and I
            participate in inter-school competitions.
          </p>
        </div>
      </div>
    </form>
  );
};

export default UserModal;
