import React from "react";
import user_avatar from "../images/user_avatar.png";
import { FaTimes } from "react-icons/fa";

const UserModal = (props) => {
  const { userModal } = props;
  return (
    <form className="userModal">
      <FaTimes
        className="close-userModal"
        onClick={() => {
          props.closeModal();
        }}
      />
      <div className="infor-user-modal">
        <div className="user-modal-avatar">
          <img
            src={
              userModal
                ? `https://employee-wed.onrender.com/${userModal.image}`
                : user_avatar
            }
          ></img>
          <h5>{userModal ? userModal.userName : "chưa có thông tin"}</h5>
        </div>
        <div className="infor-user-text">
          <h6>
            Số CCCD/CMND:
            {userModal ? userModal.id_number : "chưa có thông tin"}
          </h6>

          <h6>
            Ngày sinh: {userModal ? userModal.birthday : "chưa có thông tin"}
          </h6>

          <h6>
            Địa chỉ: {userModal ? userModal.addressBorn : "chưa có thông tin"}
          </h6>
          <h6>
            Chức vụ: {userModal ? userModal.position : "chưa có thông tin"}
          </h6>
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
