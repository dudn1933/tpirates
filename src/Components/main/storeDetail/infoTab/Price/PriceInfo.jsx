import styled from "styled-components"
import MenuPrice from "./menuPrice"
import ItemPrice from "./ItemPrice";

const PriceInfo = () => {
    return (
        <PriceInformation>
            <Title>{"전화 시 '인어교주해적단 보고 전화드립니다.' 말씀해 주세요."}</Title>
            <SectionTitle>
                <MainTitle>{'메뉴 가격'}</MainTitle>
                <SubTitle>{'한 접시 씩 구매 시 추천'}</SubTitle>
            </SectionTitle>
            <MenuPrice />
            <ItemPrice />
        </PriceInformation>
    )
}

export default PriceInfo;

const SectionTitle = styled.div`
    display:flex;
    padding: 9px 15px;
    margin-top: 10px;
    background-color: #F8F8F8;
    border: #DDDDDD 1px solid;
    border-width: 1px 0;
`;
const MainTitle = styled.div`
    color: #555555;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.75px;
    font-weight:bold;
`;

const SubTitle = styled.div`
    margin-left: 5px;
    padding-top:4px;
    color: #999999;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.64px;
`;

const Title = styled.div`
    background-color: #ffffff;
    padding: 25px 15px;
    font-size: 14px;
    color: #1C79BC;
    letter-spacing: -0.7px;
    line-height: 20px;
    font-weight: bold;
    text-align: center;
    text-align:center;
`;

const PriceInformation = styled.div`
    position:relative;
    background-color:#EEEE;
`;