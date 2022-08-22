import {Table,Button,ButtonToolbar} from 'react-bootstrap';

import { Component } from 'react';


import Updateminmax from './Updatemin&max';

class GetSupplier extends Component {
    constructor(props){
        super(props);
        this.state={sups:[],addModelShow:false,editModelShow:false,updateModelShow:false}
    }
   
    refreshList(){
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
        const{sups,id,name,email,phone,location,feedback}=this.state;
        let addModelClose=()=>this.setState({addModelShow:false});
        let editModelClose=()=>this.setState({editModelShow:false});
        let updateModelClose=()=>this.setState({updateModelShow:false});
      return (   
        <div>
           <ButtonToolbar>
        <Button variant='primary' className='butt' onClick={()=>this.setState({addModelShow:true})}>Add Supplier</Button>
    <Updateminmax
    show={this.state.addModelShow}
    onHide={addModelClose}
   />
    </ButtonToolbar>
        <Table striped bordered hover className='eTable' >
      <thead>
        <tr>
          <th>Supplier Id</th>
          
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
          <th>feed back</th>
          <th>Options</th>
          <th>UpdateFeedback</th>
        </tr>
      </thead>
      <tbody>
               
      </tbody>
    </Table>
 
    </div>
  );

    }
  }
export default GetSupplier ;