import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

//create the router instance


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //Wrap the application with the RouterProvider component and pass in the router instance as a prop
    <RouterProvider router={routes} />
);
