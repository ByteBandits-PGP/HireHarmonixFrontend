import './App.css'
import SalesPersonPage from './components/salesPersonPageComponents/SalesPersonPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/commonComponents/NavBar"
import { Routes, Route } from "react-router-dom";
import Apply from './components/applyComponents/Apply';

function App() {

  return (
    <>
      <NavBar/>
      {/* <SalesPersonPage/> */}
      <Routes>
        <Route path="/manageUsers" element={<SalesPersonPage/>}></Route>
        <Route path="/apply" element={<Apply/>}></Route>
      </Routes>
    </>
  )
}

export default App