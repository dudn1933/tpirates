import styled from "styled-components"

const MenuPrice = () => {
    // API로 fetch요청 시 하드코딩이 아닌 props로 받아 재활용 가능한 컴포넌트.
    return (
        <Menu>
            <Title>{'활모듬회'}</Title>
            <FoodImage />
            <FoodPrice>
                <FoodSize>
                    <Size>{'소'}</Size>
                    <Person>{'2인'}</Person>
                    <Price>{'35,000 원'}</Price>
                </FoodSize>
                <FoodSize>
                    <Size>{'중'}</Size>
                    <Person>{'2~3인'}</Person>
                    <Price>{'45,000 원'}</Price>
                </FoodSize>
                <FoodSize>
                    <Size>{'대'}</Size>
                    <Person>{'3~4인'}</Person>
                    <Price>{'60,000 원'}</Price>
                </FoodSize>
            </FoodPrice>
            <Desc>
                <CountryOrigin>{`광어(제주/1.5kg내외) / 농어(중국산/1.5kg내외) / 숭어(국산)`}</CountryOrigin>
                <CountryOrigin>{`참돔(일본산/1.5kg내외) / 연어(노르웨이) 구성`}</CountryOrigin>
            </Desc>
        </Menu>
    )
}

export default MenuPrice;

const CountryOrigin = styled.div`
    margin-left:5px;
    line-height: 23px;
    color: #777777;
    font-size: 13px;
    letter-spacing: -0.65px;
    &:not(:last-child) {
        &:before {
            content:"*";
            padding-right:10px;
        }
    }
    &:last-child {
        padding-left:15px;
    }
`;

const Desc = styled.div`
`;

const Size = styled.div`
    font-weight: bold;
    color: #555555;
    line-height: 26px;
`;
const Person = styled.div`
    margin-left:5px;
    font-weight: normal;
    line-height: 26px;
    color: #777777;
`;
const Price = styled.div`
    position:absolute;
    right:0;
    color: #0E0E0E;
    line-height: 26px;
`;

const FoodSize = styled.div`
    position:relative;
    height:26px;
    display:flex;
`;

const FoodPrice = styled.ul`
    padding:0;
    margin:0;
    width:390px;
`;

const Menu = styled.div`
    position:relative;
    justify-content:center;
    padding: 13px 15px;
    background-color:white;
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #555555;
    padding-bottom: 8px;
`;

const FoodImage = styled.div`
    background-image: url("https://cdn.tpirates.com/files/etc/2020/1130/d306a346d7e7ea211852998f88b63631_FThumb.jpg");
    background-repeat:no-repeat;
    background-size:cover;
    width:390px;
    height:255px;
`;
