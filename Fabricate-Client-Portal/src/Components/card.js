import './card.css';

import {Form,Button,Card,Col,Row} from 'react-bootstrap';
function Card11() {
    return (
  <Card className='card11'>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    );
   

}
export default Card11;