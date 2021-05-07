import React from 'react'
import styled from "styled-components"

const ItemList = () => {
    return (
        <List>
            <RecentPrices>{'오늘 조사된 최신시세입니다.'}</RecentPrices>
            <ItemInfo>
                <ItemImage />
                <Menu>
                    <FoodSize>
                        <Size>{'소'}</Size>
                        <Gram>{'500g~1kg'}</Gram>
                        <Price>{'35,000 원'}</Price>
                    </FoodSize>
                    <FoodSize>
                        <Size>{'소'}</Size>
                        <Gram>{'500g~1kg'}</Gram>
                        <Price>{'35,000 원'}</Price>
                    </FoodSize>
                    <FoodSize>
                        <Size>{'소'}</Size>
                        <Gram>{'500g~1kg'}</Gram>
                        <Price>{'35,000 원'}</Price>
                    </FoodSize>
                </Menu>
            </ItemInfo>
        </List>
    )
}

export default ItemList;

const ItemImage = styled.div`
    width:65px;
    height:65px;
    background-image:url("https://cdn.tpirates.com/files/etc/2017/0619/089fdb1fbcb4b66221073bac79b93162_FThumb.jpg");
    background-repeat:no-repeat;
    background-size:cover;
`;

const ItemInfo = styled.div`
    display:flex;
    align-items:center;
    width:420px;
    box-sizing:border-box;
    padding-top:15px;
`;

const RecentPrices = styled.div`
    padding: 2px 0;
    background-color: rgba(28, 121, 188, 0.7);
    color: #fff;
    font-size: 12px;
    letter-spacing: -0.6px;
    line-height: 18px;
    text-align: center;
    border-radius: 3px;
    font-weight:bold;
`;

const Menu = styled.ul`
    padding:0;
`;

const Gram = styled.div`
    color: #999999;
    font-size: 14px;
    letter-spacing: -0.7px;
    line-height: 20px;
    padding-left:10px;
`;

const Size = styled.div`
    font-weight: bold;
    color: #555555;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.7px;
    padding-left:5px;
`;

const Price = styled.div`
    color: #1C79BC;
    line-height: 26px;
    padding-left:170px;
`;

const FoodSize = styled.li`
    display:flex;
    align-items:center;
    margin-left:5px;
    height:26px;
    width:325px;
    &:hover {
        background-color: #eee;
        border-radius:5px;
    }
`;

const List = styled.div`
    width:420px;
    box-sizing:border-box;
    padding: 15px 12px 15px;
    background-color:white;
`;