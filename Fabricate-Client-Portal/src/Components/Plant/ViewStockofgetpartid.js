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
import Viewstockofpart from "./ViewStockofPart";
import "./plant.css";
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

class ViewStockofgetpartid extends Component {
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
    if (back) {
      return <Navigate to={"/plant"} />;
    }
    let addModelClose = () => this.setState({ addModelShow: false });
    return (
      <div>
        <Home />
        <Button
          className="butt13"
          onClick={() => this.setState({ back: true })}
        >
          Back
        </Button>
        <Card className="card1222">
          <Card.Header as="h5">View Stock Of Part</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="partid">
                <Form.Label>Part ID</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Part Id"
                  onChange={(e) =>
                    this.setState({ value: e.target.value, Redirect: true })
                  }
                />
              </Form.Group>
              <ButtonToolbar>
                <Viewstockofpart show={this.state.addModelShow} value={value} />
                <Button
                  variant="primary"
                  className="butt"
                  onClick={() => this.setState({ addModelShow: true })}
                >
                  View
                </Button>
              </ButtonToolbar>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default ViewStockofgetpartid;
