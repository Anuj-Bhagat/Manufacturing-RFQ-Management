import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "./Home1";
import dashboard from './dashboard';
import Login from './Login';
import Front from './front';
import slide from './slideshow';
import Home1 from './Home1';


test("should render Home  component",()=>{
    render(<Home />);
})
test("should render dashboard  component",()=>{
    render(<dashboard />);
})
test("should render Login component",()=>{
    render(<Login />);
})
test("should render Front  component",()=>{
    render(<Front  />);
})
test("should render slide component",()=>{
    render(<slide/>);
})
test("should render Home1 component",()=>{
    render(<Home1 />);
})
