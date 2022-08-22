import React, { Component } from "react";
import { Button, Modal, Form, Card } from "react-bootstrap";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Home from "../Home";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
  useHref,
  Link,
} from "react-router-dom";
export default class UpdateminmaxTable extends Component {
  constructor(props) {
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: "", back: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  snackbarclose = (event) => {
    this.setState({ snackbaropen: false });
  };
  handleSubmit(event) {
    event.preventDefault();
    // alert(event.target.PartId.value);
    let token = localStorage.getItem("login");
    if (token) {
      fetch("https://localhost:44311/api/Plant/UpdateMinMax", {
        method: "PUT",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: event.target.PartId.value,
          min: event.target.minVal.value,
          max: event.target.maxVal.value,
        }),
      })
        .then((response) => response.text())
        .then((data) => {
          this.setState({
            snackbaropen: true,
            snackbarmsg: "Updated Min and Max Quantity Successfully!!!",
          });
        })
        .catch((error) => {
          this.setState({
            snackbaropen: true,
            snackbarmsg: "Failed!!! Something went wrong. Please Try again.",
          });
        });

      event.target.reset();
    }
  }
  render() {
    const { back } = this.state;
    if (back) {
      return <Navigate to={"/plant"} />;
    }
    return (
      <div>
        <Home />
        <Button
          className="butt144"
          onClick={() => this.setState({ back: true })}
        >
          Back
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          severity="success"
          onClose={this.snackbarclose}
          message={<span id="msg-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="inherit"
              onClick={this.snackbarclose}
            >
              x
            </IconButton>,
          ]}
        />{" "}
        <Card className="card113">
          <Card.Header as="h5">Update Min and Max Quantity</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="PartId">
                <Form.Label>Part ID</Form.Label>
                <Form.Control type="text" placeholder="Enter Part ID" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="minVal">
                <Form.Label> Min Quantity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Min Quantity"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="maxVal">
                <Form.Label>Max Quantity</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Max Quantity"
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
