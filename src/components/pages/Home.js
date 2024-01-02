import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import "../../styles/home.scss";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://127.0.0.1:8086/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Dan",
        email: "email@email.com",
        password: "password",
      }),
    });
    const data = await response.json();
    setUsers(data);
    console.log(data);
  }, []);

  return (
    <div className="home-wrapper">
      <div className="site-name">Site Name</div>
      <div className="welcome-message">
        Welcome to Blackjack Teacher! Master basic strategy!
      </div>
      <Link to="/game">
        <button className="play-btn">Click Here To Play!</button>
      </Link>
    </div>
  );
};

export default Home;
