import styled from "styled-components";
import Image from "next/image";
import navbarLeft from "@/assets/images/navbarLeft 1261154177.png";
import navLogo from "@/assets/images/Logo.png";
import MenuICN from "@/assets/images/menu.png";
const Nav = styled.div`
  background-color: #101828;
  direction: rtl;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: white;
  position: fixed;
  height: 70px;
  border-top: 3px solid #101828;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
    width: 100%;
    height: 70px;
  }
`;
const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    cursor: pointer;
    display: flex;
    position: absolute;
    right: 1rem;
    margin-right: 30px;
    justify-content: center;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
`;
const NavLeft = styled.div`
  padding-left: 15px;

  @media (max-width: 768px) {
    width: 60px;
    height: 20px;
  }
`;

const NavLogo = styled.div`
  text-align: center;
  padding-right: 25px;
  font-size: 24px;
  display: flex;
  gap: 5px;
  font-weight: bold;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute; /* قرار دادن لوگو در وسط */
    left: 50%;
    transform: translateX(-50%);
  }
`;
const NavRightText = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;
  color: #fff;
  padding-right: 65px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;
const NavItem = styled.div`
  &:hover {
    color: #c2c2c2;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <>
        <NavRight>
          <NavLogo>
            <Image src={navLogo} alt="Logo" width={40} height={40} />
            توبیتکس
          </NavLogo>
          <NavRightText>
            <NavItem>بازار توبیتکس</NavItem>
            <NavItem>راهنمای استفاده</NavItem>
            <NavItem>بلاگ</NavItem>
            <NavItem>درباره ی ما</NavItem>
            <NavItem>تماس با ما</NavItem>
            <NavItem>دستیار هوشمند</NavItem>
          </NavRightText>
        </NavRight>
        <NavLeft>
          <Image src={navbarLeft} alt="WarningIcn" width={120} height={23} />
        </NavLeft>
        <MenuIcon>
          <Image src={MenuICN} alt="MenuICN" width={30} height={30} />
        </MenuIcon>
      </>
    </Nav>
  );
};

export default NavBar;
