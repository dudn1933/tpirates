import React from 'react'
import styled from "styled-components"

const StoreInfo = () => {
    return (
        <Signboard>
            <Information>
                <li>{"서울 동작구 노들로 674 노량진동 13-6 노량진수산시장 2층 5,6호"}</li>
                <li>
                    <Time>
                        <li>{"금요일(오늘):09:00 ~ 22:00"}</li>
                        <li>{"금요일(오늘):09:00 ~ 22:00"}</li>
                        <li>{"금요일(오늘):09:00 ~ 22:00"}</li>
                        <li>{"더 보기"}</li>
                    </Time>
                </li>
                <li>
                    <PhoneNumber>
                        <Number>010-1234-1234</Number>
                        <Number>010-1234-1234</Number>
                    </PhoneNumber>
                </li>
                <li>
                    <Delivery>
                        <DeliveryButton>당일배송 주문하기</DeliveryButton>
                        <li>퀵서비스 (사장님께 문의)</li>
                        <li>퀵서비스 (사장님께 문의)</li>
                        <li>퀵서비스 (사장님께 문의)</li>
                    </Delivery>
                </li>
            </Information>
        </Signboard>
    )
}

export default StoreInfo;

const DeliveryButton = styled.li`
    cursor: pointer;
    background-color: #fff;
    color: #1c79bc;
    padding: 5px 10px;
    border-radius: 3px;
    font-weight: 500;
    width:120px;
    height:30px;
    box-sizing:border-box;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -.7px;
    text-align:center;
`;

const Delivery = styled.ul`
    padding:0;
    list-style:none;
`;

const Number = styled.li`
    cursor:pointer;
    margin-right : 5px;
    background-color: #fff;
    color: #1c79bc;
    padding: 5px 10px;
    border-radius: 3px;
    font-weight: 500;
    height:30px;
    box-sizing:border-box;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -.7px;
`;

const PhoneNumber = styled.ul`
    padding: 10px 0;
    list-style:none;
    display:flex;
`;

const Time = styled.ul`
    padding: 10px 0;
    list-style:none;
`;
const Information = styled.ul`
    padding:0;
    margin:0;
    list-style:none;
`;

const Signboard = styled.div`
    position: relative;
    top:189px;
    background-color: #1c79bc;
    padding: 15px;
    width:100%;
    height:290px;
    box-sizing:border-box;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -.7px;
`;