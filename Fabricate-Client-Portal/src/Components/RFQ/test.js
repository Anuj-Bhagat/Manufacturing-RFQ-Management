import { Component } from 'react';
class  Test extends Component {
    constructor(props){
        super(props);
        this.state={supps:[]}
    }
    refreshList(){
        fetch('https://localhost:44395/api/Supplier/GetSupplierOfPart/1')
        .then((response)=>{
            if(response.ok)
            {
                return response.json();
            }
            throw response;

        }).then(res=>{
            this.setState({
                supps:res
            });
            console.log(res)
            localStorage.setItem('data',JSON.stringify({
                data:res
              
                  
                }));
            
        }).catch(error=>{
            console.error("error fetching data",error)
        });
    }
    componentDidMount()
    {
        this.refreshList();

    }
    
    render()
    {
     
        const{supps}=this.state;
        return (
              <div>
                {
                    supps.map(sup=>
                        <h1>{sup.name}</h1>)
                }
             </div>
                  
                   
                    
            
        );
    }
}

    export default Test;