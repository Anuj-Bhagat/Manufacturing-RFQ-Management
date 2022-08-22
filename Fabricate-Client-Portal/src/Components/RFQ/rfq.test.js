import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import Getrfqdetails from './getRFQDetails';
import GetSupplierid from './getSupplierid';
import GetSupplierstable from './getSupplierstable';
test("should render Getrfqdetails component",()=>{
    render(<GetSupplierid/>);
})
test("should render GetSupplierstable component",()=>{
    render(<GetSupplierstable/>);
})
test("should render Getrfqdetails component",()=>{
    render(<Getrfqdetails/>);
})