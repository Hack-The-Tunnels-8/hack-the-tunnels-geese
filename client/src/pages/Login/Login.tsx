import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    try {
      const message = await login("admin@email.com", "password");
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    attemptLogin();
  }

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

          <label htmlFor="name">Email:</label>
          <input type="text" id="Email" name="Email"
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
          />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
          />

          <button onClick={() => attemptLogin()}>
            Login
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </Page>
  );
}

export default Login;
