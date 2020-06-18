import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar dark id="react-navbar" expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                How to Vote
              </DropdownToggle>
              <DropdownMenu right className="bg-dark text-white">
                <DropdownItem>
                  <NavLink href="/register">Register to Vote</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/verification">Am I Registered?</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/absentee-ballot">Absentee Ballot</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/elections">Upcoming Elections</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/representatives">Representatives</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/voter-information">Where to Vote</NavLink>
            </NavItem>
          </Nav>
          <NavbarText ><NavLink href="/login">Login</NavLink></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;