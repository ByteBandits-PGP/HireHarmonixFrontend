import './App.css'
import SalesPersonPage from './components/salesPersonPageComponents/SalesPersonPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Login from './components/Login';
import UserDetails from './components/adminPageComponents/UserDetails';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/manageUsers" element={<SalesPersonPage />}></Route>
        <Route path="/admin" element={<UserDetails/>}></Route>

      </Routes>
    </>
  )
}

export default App
