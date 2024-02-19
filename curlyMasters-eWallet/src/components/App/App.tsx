import './App.scss';
import RootLayout from './RootLayout.tsx';
import HomePage from './../MainContent/HomePage/HomePage.tsx';
import AddCardPage from './../MainContent/AddCardPage/AddCardPage.tsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />}/>
      <Route path="addcard" element={<AddCardPage />}/>
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
