import './App.scss';



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
      <Route path="/addcard" element={<AddCard />}/>
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
