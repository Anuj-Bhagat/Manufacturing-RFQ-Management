import { Table, Button, ButtonToolbar, Modal } from "react-bootstrap";

import { Component } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate,
  useHref,
  Link,
} from "react-router-dom";
import GetSupplieridRfq from "./getSupplierstable";
import "./rfq.css";
import Home from "../Home";
class GetSupplierTableRfg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      supps: [],
      addModelShow: false,
      editModelShow: false,
      updateModelShow: false,
      back: false,
    };
  }

  refreshList() {
    // this.setState({
    //     sups:[{"Id":1,"Name":"IT"}]
    // })
    const id = window.location.href.split("/");
    let token = localStorage.getItem("login");
    if (token) {
      fetch("https://localhost:44314/api/RFQ/GetFeedback/" + id[4])
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            supps: data,
          });
        });
    }
  }
  componentDidMount() {
    this.refreshList();
  }

  render() {
    const { supps, back } = this.state;

    if (back) {
      return <Navigate to={"/Rfq"} />;
    }
    return (
      <div>
        <Home />
        <br></br>
        <br></br>
        <br></br>
        <center>
          <h1>Potential Vendors with </h1>
        </center>
        <Button
          className="butt55"
          onClick={() => this.setState({ back: true })}
        >
          Back
        </Button>
        <Table striped bordered hover className="Table21">
          <thead>
            <tr>
              <th>RFQ Id</th>
              <th>Part Id</th>
              <th>Suppiler Name</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {supps.map((sup) => (
              <tr key={sup.rfqId}>
                <td>{sup.rfqId}</td>
                <td>{sup.partId}</td>
                <td>{sup.supplierName}</td>
                <td>{sup.feedback}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default GetSupplierTableRfg;
