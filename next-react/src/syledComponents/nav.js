import style from 'styled-components';

export const Navbar = style.nav`
  width:100%;
  display:flex;
  height: 50px;
  background-color: black;
  color:white;

`;

export const NavItem = style.p`
     font-size: 20px;
     &:hover{
      color:blue;
    }
`;

export const NavItemContainer = style.div`
 width:80%;
 display:flex;
 justify-content: space-between;
 margin-left:auto;
 margin-right:auto;
 align-items:center;

`;
