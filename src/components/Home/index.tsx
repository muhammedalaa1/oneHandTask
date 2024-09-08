import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token !== "one-hand1234") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <h1 style={{ color: "white", textAlign: "center" }}>
      Welcome to Dashboard
    </h1>
  );
};

export default index;
