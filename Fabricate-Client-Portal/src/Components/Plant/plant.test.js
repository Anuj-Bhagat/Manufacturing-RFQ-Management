import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import PlantOrderDetails from './plantOrderDetails'
import ViewStockofgetpartid from './ViewStockofgetpartid';
import ViewStockofPart from './ViewStockofPart';
import Updateminmax from './Updatemin&max';

test("should render plantorderdetails component",()=>{
    render(<PlantOrderDetails/>);
})
test("should render viewStockgetpartid",()=>{
    render(<ViewStockofgetpartid/>)

})
test("should render viewStockgetpartid",()=>{
    render(<ViewStockofPart/>)

})
test("should render Updateminmax",()=>{
    render(<Updateminmax/>)

})