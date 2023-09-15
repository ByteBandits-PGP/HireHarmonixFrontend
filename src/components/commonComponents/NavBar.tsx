import hhLogo from '../../assets/images/hh-logo-white-removebg-sz2-crop.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../App.css'
import { NavDropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

export const NavBar = () => {

    const location = useLocation();
    const userRoles: string[] = ["Admin", "SalesPerson"];

    return (
        <>
            <Navbar expand="lg" className="hh-nav-bar">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={hhLogo}
                            width="65"
                            height="65"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto justify-content-end">

                            {userRoles.includes("Admin") && (
                                <>
                                    <strong><NavDropdown title="Create" id="create-dropdown">
                                        <NavDropdown.Item href="/addNewUser">New User</NavDropdown.Item>
                                        <NavDropdown.Item href="/addNewRole">New Role</NavDropdown.Item>
                                    </NavDropdown></strong>
                                    <Nav.Link href="/adminSettings" className="main-nav-item"><strong>Settings</strong></Nav.Link>
                                </>
                            )}

                            {userRoles.includes("SalesPerson") && (
                                    <>
                                        <Nav.Link href="/manageUsers" className="main-nav-item"><strong>Users</strong></Nav.Link>
                                        <Nav.Link href="/manageJobs" className="main-nav-item"><strong>Careers</strong></Nav.Link>
                                    </>
                                )}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </>
    )
}