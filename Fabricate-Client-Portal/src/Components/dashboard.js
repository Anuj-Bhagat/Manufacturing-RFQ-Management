import Carousel from "react-bootstrap/Carousel";
import React, { SyntheticEvent, useRef, useState, render } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Button, Modal, Form, ToggleButton } from "react-bootstrap";
import "./slide.css";
import BGimage from "./title-bg.jpg";
import Home from "./Home";
import svg from "./svg.png";

function Dashboard() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const enter = () => {
    navigate("/supplier");
  };

  return (
    <div>
      <Home />

      <h1 className="text1">Welcome to RFQ Management System</h1>
      <ToggleButton
        id="toggle-check"
        type="checkbox"
        variant="primary"
        value="1"
        className="bb"
        onClick={enter}
      >
        Click here to Enter the Portal
      </ToggleButton>

      {/* <img
           
           src={BGimage}
           alt="First slide"
          height={689}
          width={1489}
          className='imgg'
         /> */}
    </div>
  );
}

export default Dashboard;
