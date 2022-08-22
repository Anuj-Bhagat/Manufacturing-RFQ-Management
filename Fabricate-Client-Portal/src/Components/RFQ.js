
import './card.css';
import Home from './Home';
import {Form,Button,Card,Col,Row} from 'react-bootstrap';
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
function RFQ() {
    const navigate=useNavigate();
    const getrfq=()=>
    {
      navigate('/getrfqdetails');
      
  
    };
    const getpotential=()=>
    {
      navigate('/getpotential');
      
  
    };
    return (
        <div>
            <Home/>
     <Card className='card11'>
  <Card.Header as="h5">GetRFQ</Card.Header>
  <Card.Body>
    <br></br>
   <center>
    <Button variant="primary" onClick={getrfq}>View</Button>
    </center>
  </Card.Body>
</Card>
<Card className='card14'>
  <Card.Header as="h5">Get Potential Vendors</Card.Header>
  <Card.Body>
  <br></br>
   <center>
    <Button variant="primary" onClick={getpotential}>View</Button>
    </center>
  </Card.Body>
</Card>
    </div>
    );
}
export default RFQ;