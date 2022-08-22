import React, { Component } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
export default class Editsupplier extends Component {
  constructor(props) {
    super(props);
    this.state = { snackbaropen: false, snackbarmsg: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  snackbarclose = (event) => {
    this.setState({ snackbaropen: false });
  };
  handleSubmit(event) {
    event.preventDefault();
    let token = localStorage.getItem("login");
    fetch("https://localhost:44395/api/Supplier/UpdateSupplier", {
      method: "PUT",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        supplier_id: event.target.supplierid.value,
        name: event.target.suppliername.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        location: event.target.location.value,
        feedback: event.target.feedback.value,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        this.setState({
          snackbaropen: true,
          snackbarmsg: "Supplier Updated Successfully!!!",
        });
      })
      .catch((error) => {
        this.setState({
          snackbaropen: true,
          snackbarmsg: "Supplier update Failed",
        });
      });
  }
  render() {
    return (
      <div>
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
        />
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Suppiler
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="supplierid">
                <Form.Label>Suppiler Id</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter supplier id"
                  disabled
                  defaultValue={this.props.id}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="suppliername">
                <Form.Label>Suppiler Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter supplier name"
                  pattern="[a-zA-Z]+"
                  required
                  defaultValue={this.props.name}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  required
                  defaultValue={this.props.email}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter phone number"
                  required
                  pattern="^[789][0-9]{9}$"
                  defaultValue={this.props.phone}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter location"
                  required
                  defaultValue={this.props.location}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="feedback">
                <Form.Label>Feed Back</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter feed back"
                  pattern="[0-9]{2}"
                  required
                  defaultValue={this.props.feedback}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Update Supplier
              </Button>
            </Form>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
}
