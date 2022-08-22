import { Form, Button, Card, Col, Row } from "react-bootstrap";
import "./form.css";
import Home1 from "./Home1";
import require from "./user.png";
import React, { SyntheticEvent, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import svg from "./svg.png";

function GridExample() {
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [Redirect, setRedirect] = useState(false);
  const login = useRef(false);

  const submit = async (e) => {
    e.preventDefault();
    await fetch("https://localhost:44322/api/Auth", {
      method: "POST",
      headers: { accept: "*/*", "Content-Type": "application/json" },

      body: JSON.stringify({
        UserName,
        Password,
      }),
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        if (result.token) {
          login.current = true;
          console.log(login.current);
          setRedirect(true);
        } else {
          alert("Login Failed!!! \nCheck Username and Password.");
          e.target.reset();
        }
        localStorage.setItem("login", result.token);
      });
    });
  };
  if (Redirect) {
    return <Navigate to="/Home" />;
  }
  console.log(Redirect);
  return (
    <div>
      <Home1 />
      <Card border="primary" style={{ width: "28rem" }}>
        <Card.Header>
          <center>
            {" "}
            <img
              src={require}
              class="img-rounded"
              alt="Cinque Terre"
              width="150"
              height="150"
            />
          </center>
        </Card.Header>
        <Card.Body>
          <Form className="login" onSubmit={submit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter UserName"
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
            <center>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </center>
          </Form>
        </Card.Body>
      </Card>
      <img src={svg} alt="First slide" className="img2" />
    </div>
  );
}

export default GridExample;
