import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Addsupplier from './addsupplier';
import EditSupplier from './EditSupplier';
import GetSupplier from './getSupplier';
import UpdateFeedback from './UpdateFeedback';
test("should render Addsupplier component",()=>{
    render(<Addsupplier/>);
})
test("should render EditSupplier component",()=>{
    render(<EditSupplier/>);
})
test("should render GetSupplier component",()=>{
    render(<GetSupplier/>);
})
test("should render UpdateFeedback component",()=>{
    render(<UpdateFeedback/>);
})