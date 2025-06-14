import React, { useState } from "react";
import './login.css';

const users = [
  { username: "ciit", password: "student" }
];

function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <form classname="login" form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" value={username}onChange={(e) => setUsername(e.target.value)}/>
        <br/>
        <br/>
        <input type="password" placeholder="Password" value={password}onChange={(e) => setPassword(e.target.value)}/>
        <br/>
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );

  
}

export default Login;
