import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Home1 from './Components/Home1';
import Suppiler from './Components/Supplier';
import Form from './Components/Form'
import Login from './Components/Login';
import RFQ from './Components/RFQ'
import Card from './Components/card'
import Plant from './Components/Plant'
import PartReorderDetails from './Components/partreorderDetails';
import ViewStockDetails from './Components/ViewStockDetails';
import UpdateMin from './Components/Updatemin&max';
import GetRFQ from './Components/getrfqdetails';
import Getpotentialvendors from './Components/getpotentialvendors';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import GetSupplier from './Components/supplier/getSupplier';
import PlantOrderDetails from './Components/Plant/plantOrderDetails';
import ViewStockofgetpartid from './Components/Plant/ViewStockofgetpartid';
import Getrfqdetails from './Components/RFQ/getRFQDetails'
import GetSupplierTableRfg  from './Components/RFQ/getSupplierstable'
import GetSupplieridRfq from './Components/RFQ/getSupplierid';
import UpdateminmaxTable from './Components/Plant/Updatemin&max'
import Front from './Components/front';
import Dashboard from './Components/dashboard';
function App() {
  return (
    <BrowserRouter>
    <div>
     
      
      <Routes>
        <Route path='/' element={<Front/>}/>
        <Route path='/Home' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/supplier' element={<GetSupplier/>}/>
        <Route path='/rfq' element={<RFQ/>}/>
        <Route path='/plant' element={<Plant/>}/>
        <Route path='/partreorderdetails' element={<PlantOrderDetails/>}/>
        <Route path='/viewstockdetails' element={< ViewStockofgetpartid />}/>
        <Route path='/updatemin&maxdetails' element={<UpdateminmaxTable />}/>
        <Route path='/getrfqdetails' element={<Getrfqdetails/>}/>
        <Route path='/getpotential' element={<GetSupplierTableRfg/>}/>
        <Route path='/getpotential/:id' element={<GetSupplieridRfq/>}/>
      </Routes>
   
      
      </div>
      </BrowserRouter>
    
  
  );
}

export default App;
