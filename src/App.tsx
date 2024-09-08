import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Nav from "./components/Nav";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    console.log(token);

    if (token !== "one-hand1234") {
      navigate("/login");
    } else {
      navigate("/home");
    }
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
