import React, { useState } from "react";
import { NavStyle, UlStyle, AStyle, LogoStyle, DropdownStyle } from "./StyledHeader";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <NavStyle>
      <LogoStyle>Console Station</LogoStyle>
      <UlStyle className={showMenu ? 'show' : ''}>
        <li><a href="#home" className="nav-link px-2"><AStyle>Home</AStyle></a></li>
        <li><a href="#katalog" className="nav-link px-2"><AStyle>Katalogue</AStyle></a></li>
        <li><a href="#faq" className="nav-link px-2"><AStyle>Faqs</AStyle></a></li>
        <li><a href="#testimoni" className="nav-link px-2"><AStyle>Testimonial</AStyle></a></li>
        <li><a href="#contacus" className="nav-link px-2"><AStyle>Contact Us</AStyle></a></li>
      </UlStyle>
      <DropdownStyle>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#home">Home</Dropdown.Item>
            <Dropdown.Item href="#katalog">Katalogue</Dropdown.Item>
            <Dropdown.Item href="#faq">Faqs</Dropdown.Item>
            <Dropdown.Item href="#testimoni">Testimonial</Dropdown.Item>
            <Dropdown.Item href="#contacus">Contact Us</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </DropdownStyle>
    </NavStyle>
  );
};

export default Header;