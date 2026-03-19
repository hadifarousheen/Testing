import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import MOCK_DATA from "../../mocks/itemCardMock.json"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import productContext from "../../utils/productContext";
import Body from "../Body";
import App from "../App"
import {act} from "react"


global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("should render the body component with search result", async() => {
await act(async()=>
  render(<BrowserRouter>
        <Provider store={appStore}>
          <productContext.Provider
            value={{
              products:MOCK_DATA,
            //   setProducts:jest.fn(),
              originalProducts: MOCK_DATA,
            //   searchText:"",
            //   setSearchText:jest.fn(),
            }}
          >
            <App />
            <Body/>
          </productContext.Provider>
        </Provider>
      </BrowserRouter>

  ))

  const beforecards = screen.getAllByTestId("prodCard");
  expect(beforecards.length).toBe(30);

  const searchInput = screen.getByTestId("searchInput");
  const searchBtn = screen.getByTestId("searchBtn");

  fireEvent.change(searchInput, { target: { value: "powder" } });
  fireEvent.click(searchBtn);

  const cards = screen.getAllByTestId("prodCard");
  expect(cards.length).toBe(1);
});
