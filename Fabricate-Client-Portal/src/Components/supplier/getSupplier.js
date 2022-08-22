import { Table, Button, ButtonToolbar } from "react-bootstrap";
import { Component } from "react";
import "./Table.css";
import Addsupplier from "./addsupplier";
import Editsupplier from "./EditSupplier";
import UpdateFeedback from "./UpdateFeedback";
import Home from "../Home";
// import {BrowserRouter,Route,Routes,useNavigate,Navigate,useHref,Link,useParams} from 'react-router-dom';

class GetSupplier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sups: [],
      addModelShow: false,
      editModelShow: false,
      updateModelShow: false,
      Error: "",
    };
  }

  refreshList() {
    // this.setState({
    //     sups:[{"Id":1,"Name":"IT"}]
    // })
    let token = localStorage.getItem("login");
    if (token) {
      fetch("https://localhost:44395/api/Supplier/GetAllSuppliers", {
        headers: { Authorization: `Bearer${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            sups: data,
          });
        });
    } else {
      this.state.Error = "404 Error";
    }
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  render() {
    const { sups, id, name, email, phone, location, feedback, Error } =
      this.state;
    let addModelClose = () => this.setState({ addModelShow: false });
    let editModelClose = () => this.setState({ editModelShow: false });
    let updateModelClose = () => this.setState({ updateModelShow: false });
    return (
      <div>
        <Home />
        <center>
          <h1 style={{ color: "red" }}>{Error}</h1>
        </center>
        <ButtonToolbar>
          <Button
            variant="primary"
            className="buttupdate"
            onClick={() => this.setState({ addModelShow: true })}
          >
            Add Supplier
          </Button>
          <Addsupplier show={this.state.addModelShow} onHide={addModelClose} />
        </ButtonToolbar>
        <Table striped bordered hover className="eTable11">
          <thead>
            <tr>
              <th>Supplier Id</th>

              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Feedback</th>
              <th>Update Details</th>
              <th>Update Feedback</th>
            </tr>
          </thead>
          <tbody>
            {sups.map((sup) => (
              <tr key={sup.supplier_id}>
                <td>{sup.supplier_id}</td>
                <td>{sup.name}</td>
                <td>{sup.email}</td>
                <td>{sup.phone}</td>
                <td>{sup.location}</td>
                <td>{sup.feedback}</td>
                <td>
                  {" "}
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModelShow: true,
                          id: sup.supplier_id,
                          name: sup.name,
                          email: sup.email,
                          phone: sup.phone,
                          location: sup.location,
                          feedback: sup.feedback,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <Editsupplier
                      show={this.state.editModelShow}
                      onHide={editModelClose}
                      id={id}
                      name={name}
                      email={email}
                      phone={phone}
                      location={location}
                      feedback={feedback}
                    />
                  </ButtonToolbar>
                </td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="warning"
                      onClick={() =>
                        this.setState({
                          updateModelShow: true,
                          id: sup.supplier_id,
                          feedback: sup.feedback,
                        })
                      }
                    >
                      Update
                    </Button>

                    <UpdateFeedback
                      show={this.state.updateModelShow}
                      onHide={updateModelClose}
                      id={id}
                      feedback={feedback}
                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
export default GetSupplier;
