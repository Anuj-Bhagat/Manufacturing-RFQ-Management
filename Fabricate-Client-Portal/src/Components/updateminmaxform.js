
import {Button,Modal,Form} from 'react-bootstrap';
import React from 'react';
import './form.css';

function Updateminmaxform(props) {
    
  return (

    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Update Min & Max
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Part Id</Form.Label>
        <Form.Control type="email" placeholder="Enter Part Id" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Min Quantity</Form.Label>
        <Form.Control type="email" placeholder="Enter Min Quantity" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Max Quantity</Form.Label>
        <Form.Control type="email" placeholder="Enter Max Quantity" />
       
      </Form.Group>
     
     
      <Button variant="primary" type="submit">
        Update
      </Button>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)} className='form1' >
      Update
      </Button>

      <Updateminmaxform
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

