import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { Component } from "react";
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

class PlantOrderDetails extends Component {
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
      fetch("https://localhost:44311/api/Plant/ViewPartsReorder", {
        headers: { Authorization: `Bearer${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            sups: data
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
    const { sups, id, name, email, phone, location, feedback, back } =
      this.state;
    let addModelClose = () => this.setState({ addModelShow: false });
    let editModelClose = () => this.setState({ editModelShow: false });
    let updateModelClose = () => this.setState({ updateModelShow: false });
    if (back) {
      return <Navigate to={"/plant"} />;
    }
    return (
      <div>
        <Home />

        <br></br>
        <br></br>
        <br></br>

        <center>
          <h1>Part Reorder Details</h1>
        </center>
        <Button
          className="butt134"
          onClick={() => this.setState({ back: true })}
        >
          Back
        </Button>
        <Table striped bordered hover className="eTable">
          <thead>
            <tr>
              <th>Part Id</th>
              <th>Part Description</th>
              <th>Reorder Status</th>
              <th>Reorder Date</th>
            </tr>
          </thead>
          <tbody>
            {sups.map((sup) => (
              <tr key={sup.plantReorderId}>
                <td>{sup.partId}</td>
                <td>{sup.partDetails}</td>
                <td>{sup.reorderStatus}</td>
                <td>{sup.reorderDate.split('T')[0]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default PlantOrderDetails;
