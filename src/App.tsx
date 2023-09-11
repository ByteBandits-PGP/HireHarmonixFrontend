import './App.css'
import SalesPersonPage from './components/salesPersonPageComponents/SalesPersonPage'
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import { NavBar } from "./components/commonComponents/NavBar"
import { Routes, Route } from "react-router-dom";
import Apply from './components/applyComponents/Apply';
=======
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Login from './components/Login';
import UserDetails from './components/adminPageComponents/UserDetails';
>>>>>>> dev

function App() {
  return (
    <>
<<<<<<< HEAD
      <NavBar/>
      {/* <SalesPersonPage/> */}
      <Routes>
        <Route path="/manageUsers" element={<SalesPersonPage/>}></Route>
        <Route path="/apply" element={<Apply/>}></Route>
=======
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/manageUsers" element={<SalesPersonPage />}></Route>
        <Route path="/admin" element={<UserDetails/>}></Route>
>>>>>>> dev
      </Routes>
    </>
  )
}

export default App