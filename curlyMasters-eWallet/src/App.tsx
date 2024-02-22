// import ReactDOMClient from "react-dom/client";
import {Cards} from "./Screens/Cards/Cards";

import "../global.css";
import Addcard from "./Screens/Addcard/Addcard";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Cards />} />
      <Route path="/addcard" element={<Addcard />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
