import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./Navbar.style.scss";

function Navbar() {
  const { loggedIn, logout } = useAccountContext();
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="https://www.gooseinsurance.com/wp-content/uploads/2020/07/Goose-Logo_Black_Home@3x.png" alt="Goose Logo" width="100" height="50"></img>
      </div>
      <div className="navbar__account">
      <div className="button-container">
          {loggedIn() === false ? (
            <>
              <button
                className="sign-up-button"
                onClick={() => navigate("/sign-up")}
              >
                Sign Up
              </button>
              <button
                className="login-button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </>
          ) : (
            <button className="logout-button" onClick={() => logout()}>
              Logout
            </button>
          )}
      </div>
    </div>
    </div>
  );
}

export default Navbar;
