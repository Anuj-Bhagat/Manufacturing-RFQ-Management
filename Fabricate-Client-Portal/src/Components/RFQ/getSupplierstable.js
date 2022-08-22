import {
  Form,
  Button,
  Card,
  Col,
  Row,
  Modal,
  ButtonToolbar,
} from "react-bootstrap";
import React from "react";
import { Component } from "react";
import { browserHistory } from "react-router";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
  useHref,
  Link,
  useParams,
} from "react-router-dom";
import GetSupplierTableRfg from "./getSupplierid";
import "./rfq.css";
import Home from "../Home";

class GetSupplieridRfq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: " ",
      Redirect: false,
      addModelShow: false,
      back: false,
    };
  }

  render() {
    const { value, Redirect, back } = this.state;
    const mm = window.location.href.split("http:localhost:3000");
    if (Redirect) {
      return <Navigate to={"/getpotential/" + value} />;
      alert("fd");
    }

    if (back) {
      return <Navigate to={"/Rfq"} />;
    }
    let addModelClose = () => this.setState({ addModelShow: false });
    return (
      <div>
        <Home />
        <Button
          className="butt120"
          onClick={() => this.setState({ back: true })}
        >
          Back
        </Button>
        <Card className="card1222">
          <Card.Header as="h5">Potential Vendors</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="partid">
                <Form.Label>Part ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter RFQ Id"
                  onChange={(e) => this.setState({ value: e.target.value })}
                  required
                />
              </Form.Group>

              <ButtonToolbar>
                {/* <GetSupplierTableRfg
    show={this.state.addModelShow}
    onHide={addModelClose}
    value={value}
   /> */}
                <center>
                  <Button
                    variant="primary"
                    className="butt"
                    onClick={() => this.setState({ Redirect: true })}
                  >
                    View
                  </Button>
                </center>
              </ButtonToolbar>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default GetSupplieridRfq;
