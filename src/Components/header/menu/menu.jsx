import styled from "styled-components";

const Menu = () => {
    const menuList = ["홈","시장","쇼핑","콘텐츠","시세","도매","후기","문의"];

    return (
        <MenuBar>
            {menuList.map(v => {
                return <List key={v}>{v}</List>
            })}
        </MenuBar>
    )
}

export default Menu;

const MenuBar = styled.ul`
    display:flex;
    height:40px;
    list-style:none;
    margin:auto;
    padding:0 28px;
    justify-content:space-between;
    align-items:center;
`;
const List = styled.li`
    cursor: pointer;
    color: #777;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -.7px;
    font-weight: 500;
    &:hover {
        color:#1c79bc;
    }
`;