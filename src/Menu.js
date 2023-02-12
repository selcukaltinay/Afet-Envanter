import React, { useState, Component } from 'react';
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
  NavbarText,
  Form,
} from 'reactstrap';

function Menu(args) {
  const [isOpen, setIsOpen] = useState(false);

  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} color="warning" fixed="top" expand="md">
        <NavbarBrand href="/">Envanter</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/demands/">
                İhtiyaç Listesi
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/AboutUs/">
                Hakkımızda
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Bağış Yap
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="https://www.afad.gov.tr">AFAD</DropdownItem>
                <DropdownItem href="https://ahbap.org">AHBAB</DropdownItem>
                <DropdownItem divider />
                <Form></Form>
                <DropdownItem>Daha fazla...</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className="text-danger">6 Şubat 2023 - 04:17 Pazarcık(Kahramanmaraş)</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;