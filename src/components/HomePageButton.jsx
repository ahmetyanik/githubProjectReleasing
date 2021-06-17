import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePageButton() {







  return (
    <Link to="/">
      <button className="btn btn-primary mt-5">
        Home Page
      </button>
    </Link>
  );
}

export default HomePageButton;
