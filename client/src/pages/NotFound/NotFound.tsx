import React from "react"; // Make sure to import React if you're using JSX
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <div className="container">
        <div className="text">
          <h1>404: Not Found</h1>
          <img
            src="https://media.tenor.com/zCWcvMByt9kAAAAM/monkey-rizz-lightskin-stare.gif"
            alt="Not Found Animation Of A Monkey Trying To Seduce You"
          />
        </div>
      </div>
    </section>
  );
}

export default NotFound;
