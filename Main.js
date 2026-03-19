import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./src/components/App";
import Contact from "./src/components/Contact";
import Body from "./src/components/Body";
import ProductInfo from "./src/components/ProductInfo";
import Cart from "./src/components/Cart";

const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
        element: <Body />
        },
      {
        path: "/contact",
        element: <Contact />
      },
       {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/product/:id",
        element:<ProductInfo/>
  }

]}]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);