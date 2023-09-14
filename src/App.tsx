import './App.css'
import SalesPersonPage from './components/salesPersonPageComponents/SalesPersonPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Login from './components/Login';
import UserDetails from './components/adminPageComponents/UserDetails';
import Apply from './components/applyComponents/Apply';
import { NavBar } from './components/commonComponents/NavBar';

function App() {
  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/login" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/manageUsers" element={<SalesPersonPage />}></Route>
        <Route path="/admin" element={<UserDetails />}></Route>
        <Route path="/apply" element={<Apply />}></Route>
      </Routes>
    </>
  )
}

export default App
