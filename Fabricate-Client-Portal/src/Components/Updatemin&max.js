import {Table,Button} from 'react-bootstrap';
import './supplier.css';
import Form from './Form'
import Home from './Home';
import Updateminmaxform from './updateminmaxform';
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
function UpdateMin() {
    const navigate=useNavigate();
    const back=()=>
    {
      navigate('/plant');
      
  
    };
  return (
    <div>
      <Home/>
      <Updateminmaxform/>
      <Button variant="primary" onClick={back} className='Button2' > Back </Button>
    <Table striped bordered hover className='eTable' >
      <thead>
        <tr>
          <th>Part Id</th>
          <th>Min Quantity</th>
          <th>Max Quantity</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
      
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default UpdateMin;