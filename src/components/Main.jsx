import React, { useEffect, useState } from "react";
import Input from "./Input";
import Logo from "./Logo";
import Card from "../components/card/Card";

function Main() {
  return (
    <div className="main">
      <Logo />
      <Input />
      <Card />
    </div>
  );
}

export default Main;
