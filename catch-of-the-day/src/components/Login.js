import React from "react";

const Login = (props) => (
  <nav className="login">
    <h1>Inventory Login</h1>
    <p>Sign in to manage your store's inventory</p>
    <button className="github" onClick={() => props.authenticate("Github")}
      >
        Log in with GitHub
    </button>
      <button className="facebook" onClick={() => props.authenticate("Facebook")}
        >
          Log in with Facebook
      </button>

  </nav>
);

export default Login;
