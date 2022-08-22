import {Table,Button,ButtonToolbar,Modal} from 'react-bootstrap';

import { Component } from 'react';
import ViewStockofgetpartid from './ViewStockofgetpartid';
import {BrowserRouter,Route,Routes,useNavigate,Navigate,useHref,Link,} from 'react-router-dom';
import './plant.css';

class  Viewstockofpart extends Component {
    constructor(props){
        super(props);
        this.state={supps:[],addModelShow:false,editModelShow:false,updateModelShow:false}
    }
   
    refreshList(){
        // this.setState({
        //     sups:[{"Id":1,"Name":"IT"}]
        // })
        let token=localStorage.getItem('login')
        if(token)
        {
        fetch('https://localhost:44311/api/Plant/ViewStockInHand/'+this.props.value,{headers:{"Authorization":`Bearer${token}`}})
        .then(response=>response.json())
        .then(data=>{
           
            this.setState({
                supps:data
            });
        }
            
            );
      }
    }
    componentDidMount()
    {
        this.refreshList();

    }
    componentDidUpdate()
    {
        this.refreshList();
    } 
    
    render() {
        const{supps,id,name,email,phone,location,feedback}=this.state;
        let addModelClose=()=>this.setState({addModelShow:false});
        let editModelClose=()=>this.setState({editModelShow:false});
        let updateModelClose=()=>this.setState({updateModelShow:false});
    
      return (   
        <div>
          
           <Modal 
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              <h1>View Stock Of Part</h1>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
     
           
        <Table striped bordered hover className='Table1' >
      <thead>
      <tr>
        <th>Part Id</th>
        <th>Part Description</th>
        <th>Part Specification</th>
        <th>StockInHand</th>
      </tr>
      </thead>
      <tbody>
    
            <tr key={supps.partId}>
                <td>{supps.partId}</td>
                <td>{supps.partDescription}</td>
                <td>{supps.partSpecification}</td>
               
                <td>{supps.stockInHand}</td>
           

            </tr>
            
            
    
        
      </tbody>
    </Table>
    </Modal.Body>
            <Modal.Footer>
              <Link to="/" >
              <Button onClick={()=>window.location.reload()}  >Close</Button>
              </Link>
            </Modal.Footer>
          </Modal>
          
 
    </div>
  );
      

    }
  }
export default  Viewstockofpart;