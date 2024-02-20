// import ReactDOMClient from "react-dom/client";
import { Cards } from "./Screens/Cards/Cards";
import "../global.css";
import "../styleguide.css";
// import { Addcard } from "./Screens/Addcard/Addcard";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Cards />}/>
    </Route>
  )
);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}


export default App
// const app = document.getElementById("app");
// const root = ReactDOMClient.createRoot(app);
// root.render(<Cards />);