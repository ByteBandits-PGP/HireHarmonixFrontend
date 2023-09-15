import './App.css'
import SalesPersonPage from './components/salesPersonPageComponents/SalesPersonPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Login from './components/Login';
import Apply from './components/applyComponents/Apply';
import { NavBar } from './components/commonComponents/NavBar';
import { AdminPage } from './components/adminPageComponents/AdminPage';

function App() {
  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/login" && location.pathname !== "/apply" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/manageUsers" element={<SalesPersonPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/apply" element={<Apply />}></Route>
      </Routes>
    </>
  )
}

export default App
