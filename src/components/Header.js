import { useState } from "react";
import {Container, Row, Col} from 'reactstrap';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import { NavLink } from 'react-router-dom';
import HygieiaFitnessLogo from "../app/assets/img/HygieiaFitness_logo.PNG";
import "../App.css";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    return (
        <Navbar sticky="top" expand="md" light>
        <NavbarBrand href="/" className="nav-links">
            <img
            src={HygieiaFitnessLogo}
            alt="fitness logo"
            className="ms-5"
            width="100"
            height="80"
            />
            <h4 className="mt-2 ms-2  nav-links">HygieiaFitness</h4>
        </NavbarBrand>

        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
            <Nav  className="ms-auto nav-links" navbar>
                <Col>
                    <NavItem>
                        <NavLink  className="nav-link" to="/">
                        Home
                        </NavLink>
                    </NavItem>
                </Col>
                <Col>
                    <NavItem>
                        <Dropdown isOpen={dropdown} toggle={function noRefCheck() {}}>
                            <DropdownToggle
                                className="headerFont"
                                data-toggle="dropdown"
                                onClick={() =>
                                dropdown ? setDropdown(false) : setDropdown(true)
                                }
                                tag="span"
                            >
                                Advice
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    <NavLink className='nav-link' to="/fitness" onClick={() => setDropdown(false)}>
                                        Fitness
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink className='nav-link' to="/nutrition" onClick={() => setDropdown(false)}>
                                        Nutrition
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink className='nav-link' to="/self-care" onClick={() => setDropdown(false)}>
                                        Self Care
                                    </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                </Col>
                <Col>
                    <NavItem>
                        <NavLink className="nav-link" to="/success">
                        Success
                        </NavLink>
                    </NavItem>
                </Col>
                <Col>
                    <NavItem>
                        <NavLink className="nav-link" to="/shop">
                        Shop
                        </NavLink>
                    </NavItem>
                </Col>
                <Col>
                    <NavItem>
                        <NavLink className="nav-link" to="/business">
                        Business
                        </NavLink>
                    </NavItem>
                </Col>
                <Col>
                    <NavItem>
                        <NavLink className="nav-link" to="/login">
                        Login
                        </NavLink>
                    </NavItem>
                </Col>
                    <NavItem>
                        <NavLink className="nav-link" to="/sign-up">
                        Sign-up
                        </NavLink>
                    </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    );
};

export default Header;
