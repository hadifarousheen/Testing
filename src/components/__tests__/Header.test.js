import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Header from "../Header.js"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body.js";
import Item from "../Item.js";
import productContext from "../../utils/productContext.js";
import MOCK_DATA from "../../mocks/itemCardMock.json";

beforeAll(()=>{
    console.log("Before All")
})
beforeEach(()=>{
    console.log(("Before Each"))
})
afterAll(()=>{
    console.log("After All")
})
afterEach(()=>{
    console.log("After Each")
})


it("should load the Header component with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
);
//   const loginButton=screen.getByRole("button",{name:"Login"});
   const loginButton=screen.getByText("Login")
  expect(loginButton).toBeInTheDocument();
})

it("should check is if the cart button is there or not",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
)
// const cartButton=screen.getByText("Cart-0 Items");
const cartButton=screen.getByText(/Cart/)
expect(cartButton).toBeInTheDocument();
})

it("should change the login button to logout and vice-versa on click",()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    const loginButton=screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton=screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
    fireEvent.click(logoutButton);
    expect(loginButton).toBeInTheDocument()
})

test("should load all the products when clicked on the get all products button",()=>{
    render(
        
    <BrowserRouter>
    <productContext.Provider  value={{
    products: MOCK_DATA,
    setProducts: jest.fn(),
    originalProducts: MOCK_DATA,
  }}>
    <Provider store={appStore}>
        <Header />
        <Body/>
        {/* <Item products={MOCK_DATA}/> */}
    </Provider>
    </productContext.Provider>
        </BrowserRouter>
    )
    const productsButton=screen.getByRole("button",{name:"Get All Products"})
    expect(productsButton).toBeInTheDocument();
    fireEvent.click(productsButton)
    const productNumber=screen.getAllByTestId("prodCard");
    expect(productNumber.length).toBe(30);
})
