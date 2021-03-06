import { useNavigate } from "react-router-dom";
import styles from "../../Auth.module.css";

function LoginFrom() {
  const navigate = useNavigate();
  return (
    <form className={styles["login-form"]}>
      <div className="mb-3">
        <input
          type="text"
          className={`form-control ${styles.input}`}
          placeholder="Email address or phone number"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className={`form-control ${styles.input}`}
          placeholder="Password"
        />
      </div>
      <button
        type="button"
        className={`btn ${styles["btn-custom"]} btn-lg btn-block mt-3`}
      >
        Login
      </button>
      <div className="text-center pt-3 pb-3">
        {/* <a href="/">Forgotten password?</a> */}
        <hr />
        <button
          type="button"
          className="btn btn-success btn-lg mt-3"
          onClick={() => navigate("/register")}
        >
          Create New Account
        </button>
      </div>
    </form>
  );
}

export default LoginFrom;
