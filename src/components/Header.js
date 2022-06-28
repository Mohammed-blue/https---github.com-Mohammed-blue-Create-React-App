import { useState } from "react";
import {
    NavLink,
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
} from "reactstrap";

import HygieiaFirnessLogo from "../app/assets/img/HygieiaFirness_logo.PNG";
import "../App.css";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    return (
        <Navbar sticky="top" expand="md" light>
        <NavbarBrand href="/" className="nav-links">
            <img
            src={HygieiaFirnessLogo}
            alt="fitness logo"
            className="ms-5"
            width="100"
            height="80"
            />
            <h4 className="mt-2 ms-2  nav-links">HygieiaFitness</h4>
        </NavbarBrand>

        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
            <Nav className="ms-auto nav-links" navbar>
            <NavItem>
                <NavLink className="nav-link" to="/">
                Home
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/advice">
                <Dropdown isOpen={dropdown} toggle={function noRefCheck() {}}>
                    <DropdownToggle data-toggle="dropdown" onClick={() => dropdown ? setDropdown(false) : setDropdown(true)} tag="span" >
                    Advice
                    </DropdownToggle>
                    <DropdownMenu>
                    <NavLink to='/fitness' onClick={() => setDropdown(false)}>
                        Fitness
                    </NavLink>
                    <NavLink to='/nutrition' onClick={() => setDropdown(false)}>
                        Nutrition
                    </NavLink>
                    <NavLink to='/self-care' onClick={() => setDropdown(false)}>
                        Self-care
                    </NavLink>
                    </DropdownMenu>
                </Dropdown>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/success">
                Success
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/shop">
                Shop
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/business">
                Business
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/login">
                Login
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className="nav-link" to="/sign-up">
                SIGN-UP
                </NavLink>
            </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    );
};

export default Header;
