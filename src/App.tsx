import './App.css'
import SalesPersonPage from './components/salesPersonPageComponents/SalesPersonPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/commonComponents/NavBar"
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <NavBar/>
      <SalesPersonPage/>
      {/* <Routes>
        <Route path="/salesPersonPage" element={<SalesPersonPage/>}></Route>
      </Routes> */}
    </>
  )
}

export default App
