import styles from "./login.module.scss";
import Logo from "../../../public/logo.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ClipLoader } from "react-spinners";

const index = () => {
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("12345678");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    let uid = Math.floor(Math.random() * 10000);

    try {
      await axios.post(
        `https://one-hand/login?uid=${uid}`,
        {
          email,
          password,
          uid,
        },
        {
          headers: {
            "X-secret-key": "OH2024",
          },
        }
      );
      document.cookie = "token=one-hand1234; path=/";

      navigate("/home");
      //   if (response.status === 200) {
      //     document.cookie = "token=one-hand1234; path=/";
      //     navigate("/home");
      //   }
    } catch (error) {
      //this is because the api is not working
      document.cookie = "token=one-hand1234; path=/";
      navigate("/home");

      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.wrapper}>
          <img src={Logo} alt="" />
          <h1 className={styles.title}>Log In</h1>
          <form action="" className={styles.formContainer}>
            <div className={styles.inputWrapper}>
              <label className={styles.label} htmlFor="email">
                Email:
              </label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={styles.input}
              />
            </div>
            <div className={styles.inputWrapper}>
              <label className={styles.label} htmlFor="password">
                Password :
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="Password"
                className={styles.input}
              />
            </div>

            <button onClick={handleLogin} className={styles.login}>
              {loading ? (
                <ClipLoader
                  color={"red"}
                  loading={true}
                  size={10}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Log In"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
