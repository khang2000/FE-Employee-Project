import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import User from "./pages/User/User";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import UpdateUser from "./pages/UpdateUser/UpdateUser";
import Example from "./pages/Example/Example";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/user/:id" element={<User />} />
          <Route path="/update_user/:id" element={<UpdateUser />} />
          <Route path="/example" element={<Example />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
