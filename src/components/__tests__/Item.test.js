import Item from "../Item"
import MOCK_DATA from "../../mocks/itemCardMock.json"
import {  render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it("should render item card component with props data",()=>{
    render(
  <Provider store={appStore}>
    <Item product={MOCK_DATA[0]}/>
    </Provider>
);
    const name=screen.getByText("Essence Mascara Lash Princess");
    expect(name).toBeInTheDocument();
})