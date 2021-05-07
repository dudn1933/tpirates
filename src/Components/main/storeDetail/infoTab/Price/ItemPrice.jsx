import React from 'react'
import styled from "styled-components"
;import ItemList from "./ItemList"

const ItemPrice = () => {
    const month = new Date().getMonth()+1;
    const date = new Date().getDate();
    const weekday = ['일', '월', '화', '수', '목', '금', '토'];
    const getDay = () => {
        let day = new Date()
        let week = weekday[day.getDay()];
        return week;
    }

    return (
        <div>
            <SectionTitle>
                <MainTitle>{'품목시세'}</MainTitle>
                <SubTitle>{'마리당 구매 시 추천'}</SubTitle>
                <TodayPrice>{`${month}.${date} (${getDay()}) 오늘시세`}</TodayPrice>
            </SectionTitle>
            <ItemList />
            {/* ItemList로 종류,가격 등 props를 넘겨 재사용 가능 컴포넌트로만들기. */}
        </div>
    )
}

export default ItemPrice;

const TodayPrice = styled.div`
    position:absolute;
    right:15px;
    color: #1C79BC;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: -0.7px;
    font-weight:bold;
`;

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