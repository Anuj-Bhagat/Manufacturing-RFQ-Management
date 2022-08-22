import "./card.css";
import Home from "./Home";
import { Form, Button, Card, Col, Row } from "react-bootstrap";

import { Routes, Route, useNavigate } from "react-router-dom";
import ViewStockDetails from "./ViewStockDetails";
function Plant() {
  const navigate = useNavigate();
  const partreorder = () => {
    navigate("/partreorderdetails");
  };
  const Viewstockdetails = () => {
    navigate("/viewstockdetails");
  };
  const Updateminmax = () => {
    navigate("/updatemin&maxdetails");
  };
  return (
    <div>
      <Home />
      <Card className="card11">
        <Card.Header as="h5">View Part Reorder Details</Card.Header>
        <Card.Body>
          <br></br>
          <center>
            <Button variant="primary" onClick={partreorder}>
              View
            </Button>
          </center>
        </Card.Body>
      </Card>
      <Card className="card12">
        <Card.Header as="h5">View Stock Of Part</Card.Header>
        <Card.Body>
          <br></br>
          <center>
            <Button variant="primary" onClick={Viewstockdetails}>
              View
            </Button>
          </center>
        </Card.Body>
      </Card>
      <Card className="card13">
        <Card.Header as="h5">Update Min & Max Quantity</Card.Header>
        <Card.Body>
          <br></br>
          <center>
            <Button variant="primary" onClick={Updateminmax}>
              View
            </Button>
          </center>
        </Card.Body>
      </Card>
    </div>
  );
}
export default Plant;
