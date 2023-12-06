import { useEffect, useState } from "react";
import Header from "../../components/header/header";
import user_avatar from "../images/user_avatar.png";
import { useParams } from "react-router-dom";
import axios from "axios";
const User = () => {
  const { id } = useParams();
  // const [user, setUser] = useState();
  const [userName, setUserName] = useState();
  const [id_number, setIdNumber] = useState();
  const [birthday, setBirthday] = useState();
  const [addressBorn, setAddressBorn] = useState();
  const [image, setImage] = useState();
  const [position, setPosition] = useState();

  useEffect(() => {
    axios
      .get("https://employee-wed.onrender.com/api/user/" + id)
      .then((result) => {
        console.log(result);
        setUserName(result.data.data.userName);
        setIdNumber(result.data.data.id_number);
        setBirthday(result.data.data.birthday);
        setAddressBorn(result.data.data.addressBorn);
        setImage(result.data.data.image);
        setPosition(result.data.data.position);
      })
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <Header />
      <div className="infor-user">
        <img
          src={
            image ? `https://employee-wed.onrender.com/${image}` : user_avatar
          }
        ></img>
        {console.log(`https://employee-wed.onrender.com/${image}`)}
        <div className="infor-user-text">
          <h2>{userName ? userName : "Nhập thông tin"}</h2>

          <h4>Số CCCD/CMND: {id_number ? id_number : "Nhập thông tin"}</h4>

          <h4>Ngày sinh: {birthday ? birthday : "Nhập thông tin"}</h4>

          <h4>Địa chỉ: {addressBorn ? addressBorn : "Nhập thông tin"}</h4>
          <h4>Chức vụ: {position ? position : "Nhập thông tin"}</h4>
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
    </div>
  );
};

export default User;
