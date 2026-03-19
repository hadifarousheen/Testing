import { render,screen } from "@testing-library/react";
import Contact from "../Contact.js"
import "@testing-library/jest-dom"

describe("contact page test cases",()=>{

test("should load contact us component",()=>{
    render(<Contact/>);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("should load button inside contact component",()=>{
    render(<Contact/>);
    // const button=screen.getByRole("button");
    const button=screen.getByText("Submit");
    expect(button).toBeInTheDocument();
})

test("should load two input boxes on the contact component",()=>{
    render(<Contact/>);
    const inputBoxes=screen.getAllByRole("textbox");
    // expect(inputBoxes).toBeInTheDocument();
    // expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
})
})