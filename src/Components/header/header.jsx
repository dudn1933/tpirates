import styled from "styled-components";
import Login from "./login/login"
import Menu from "./menu/menu";

const Header = () => {
    return (
        <>
            <HeaderTop>
                <MainLogo />
                <Login />
            </HeaderTop>
            <Menu />
        </>
    )
}

export default Header;

const HeaderTop = styled.div`
    display:flex;
    justify-content:space-between;
    padding:0 15px;
`;

const MainLogo = styled.div`
    width:162px;
    height:36px;
    color:black;
    background-image: url("../image/logo.png");
    background-size: 162px 36px;
    background-repeat: no-repeat;
`;