import { Table, Button, ButtonToolbar } from "react-bootstrap";
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
import "./rfq.css";
import Home from "../Home";
class Getrfqdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sups: [],
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
    let token = localStorage.getItem("login");
    if (token) {
      fetch("https://localhost:44314/api/RFQ/GetAllRFQ", {
        headers: { Authorization: `Bearer${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            sups: data,
          });
        });
    }
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  render() {
    const { sups, back } = this.state;
    let addModelClose = () => this.setState({ addModelShow: false });
    let editModelClose = () => this.setState({ editModelShow: false });
    let updateModelClose = () => this.setState({ updateModelShow: false });
    if (back) {
      return <Navigate to={"/Rfq"} />;
    }
    return (
      <div>
        <Home />
        <br></br>
        <br></br>

        <center>
          <h1>RfQ Details</h1>
        </center>
        <Button className="butt1" onClick={() => this.setState({ back: true })}>
          Back
        </Button>
        <Table striped bordered hover className="eTable1">
          <thead>
            <tr>
              <th>RFQ Id</th>
              <th>Part Details</th>
              <th>Demand Id</th>
              <th>Part Specification</th>
              <th>Quantity</th>
              <th>Time to Supply</th>
            </tr>
          </thead>
          <tbody>
            {sups.map((sup) => (
              <tr key={sup.rfqId}>
                <td>{sup.rfqId}</td>
                <td>{sup.partName}</td>
                <td>{sup.demandid}</td>

                <td>{sup.specification}</td>

                <td>{sup.quantity}</td>
                <td>{sup.timetoSupply.split('T')[0]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default Getrfqdetails;
