
import {Button,Modal,Form} from 'react-bootstrap';
import React from 'react';
import './form.css';
function MyVerticallyCenteredModal(props) {
  return (

    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Add Suppiler
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Suppiler Name</Form.Label>
        <Form.Control type="email" placeholder="Enter supplier name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="email" placeholder="Enter phone number" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="email" placeholder="Enter location" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Feed Back</Form.Label>
        <Form.Control type="email" placeholder="Enter feed back" />
       
      </Form.Group>

     
      <Button variant="primary" type="submit">
        Add
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
      Add Suppiler
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

