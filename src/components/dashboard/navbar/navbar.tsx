import styled from "styled-components";
import Image from 'next/image'
import navbarLeft from "@/assets/images/navbarLeft 1261154177.png";
import navLogo from "@/assets/images/Logo.png";

const Nav = styled.div`
        background-color: #101828;
        direction: rtl;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        color : white;
        position :fixed ;
        height: 70px;  
        border-top: 3px solid #101828;

        `

const NavRight = styled.div`
        display: flex;
        align-items: center;
    `
const NavLeft = styled.div`
padding-left: 15px;`

const NavLogo = styled.div`
text-align: center;
padding-right: 25px;
font-size: 24px;
display: flex;
gap: 5px;
font-weight: bold;
align-items: center;
    `
const NavRightText = styled.div`
display: flex;
gap: 20px;
font-size: 14px;
color: #fff;
padding-right: 65px;
cursor: pointer;
`
const NavItem = styled.div`&:hover {color: #c2c2c2;}`;





const NavBar = () => {
    return (

        < Nav >
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
                </NavRight><NavLeft>
                    <Image src={navbarLeft} alt="WarningIcn" width={120} height={23} />
                </NavLeft>
            </>
        </Nav >

    );
};

export default NavBar