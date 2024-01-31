import styled from 'styled-components';
import './fonts/Mario-Kart-DS.ttf';

export const NavStyle = styled.nav`
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    height: 50px;
    padding: 0 20px; /* Reduced padding for smaller screens */
    background: linear-gradient(to right,#01a3da, #000000,#d62785);
   
`;

export const UlStyle = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    justify-self: end;

     /* Your existing styles for desktop navigation */

  &.show {
    /* Styles to show the menu for smaller screens */
    display: grid;
  }

  @media screen and (max-width: 768px) {
    /* Styles for tablet */
  }

  @media screen and (max-width: 480px) {
    /* Styles for mobile */
    grid-template-columns: 1fr;
    text-align: center;
    background: #000; /* Add your background color for the mobile menu */
  }
    
`;

export const AStyle = styled.a`
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease-out;
    padding-top: 10px;
    font-family: 'Mario-Kart-DS';
    background-image: linear-gradient(to right, #ee9ca7, #ffdde1);
    color: transparent;
    display: inline-block;
    background-clip: text;
`;
export const DropdownStyle = styled.div`
  /* Styles for the dropdown container */
  display: none; /* Hide by default for mobile */

  @media screen and (max-width: 480px) {
    /* Display for mobile */
    display: block;
  }
`;
// Terapkan font
export const LogoStyle = styled.h3`
    color: #000000;
    font-family: 'Mario-Kart-DS';
    font-size: 1.5rem;

`;
