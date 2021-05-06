import styled from "styled-components"; 
import {useState} from "react";
import {zoneData, itemData } from "../../json/demo_data";

const SelectFilter = () => {
    // zoneData = 모든 지역, itemData = 모든 품목
    const [on, setOn] = useState(false);
    const [data, setData] = useState(9);
    const optionList = ["모든 지역", "모든 품목", "기본 순"];
    const basic = ["기본 순", "인기 순", "최근 본 가게"];
    const area = [{
        label: "내 주변",
        code: "CurrentLocation",
      },{
        label: "모든 지역",
        code: "AllRegions",
      },];

    const openList = (e) => {
        if(on === false) {
            setOn(true);
            setData(e.target.id);
        } else if(on === true){
            if(e.target.id === data) setOn(false);
            if(e.target.id !== data) setData(e.target.id)
        } else {
            setOn(false);
        }
    }

    const listData = () => {
        console.log(itemData)
        if(data === "0") {
            return area.concat(zoneData).map(({code,label}) => {
                return <ZoneData key={code}>{label}</ZoneData>
            })
        } else if(data === "1") {
            return itemData.map(({code, label}) => {
                return (<ItemData key={code}>
                    <ItemImg image={code}/>
                    <ItemName>{label}</ItemName>
                    </ItemData>)
            })
        } else {
            return basic.map((v) => {
                return <ZoneData key={v}>{v}</ZoneData>
            })
        }
    }

    return (
        <>
            <OptionTabs>
                {optionList.map((v,index) => {
                    return <Option key={index} id={index} onClick={openList}>{`${v} ▾`}</Option>
                })}
            </OptionTabs>
            {on&&<Test data={data}>
                <List data={data}>{listData()}</List>
            </Test>}
        </>
    )
}

export default SelectFilter;

const Test = styled.div`
    height: ${({data}) => data==="1"||data ==="2" ? "100vh" : null};
    background-color:${({data}) => data==="1"||data ==="2" ? "#ddd" : null};
`;

const ItemImg = styled.div`
    background-image: url(${({image}) => image ? `../image/${image}.png` : null});
    background-repeat:none;
    height:50px;
    background-position : center;
    background-size: contain;
    background-repeat: no-repeat;
`;

const ItemName = styled.div`
    font-weight: 500;
    &:hover {
        color: #1b79bc; 
    }
`;

const ItemData = styled.li`
    box-sizing:border-box;
    width:140px;
    cursor:pointer;
    list-style:none;
    text-align:center;
    background-color:white;
    border-bottom:1px solid #ddd;
    &:not(:nth-child(3n)) {
        border-right:1px solid #ddd;
    }
`;

const ZoneData = styled.li`
    cursor:pointer;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    list-style:none;
    width:390px;
    margin: 0 15px;
    height:40px;
    font-family: "Noto Sans KR", "맑은 고딕", Arial, Gulim;
    font-size: 14px;
    letter-spacing: -0.7px;
    line-height: 20px;
    font-weight: 400;
    color: #777;
    border-bottom: 1px solid #ddd;
    &:hover {
        color: #1b79bc; 
    }
`;

const List = styled.ul`
    display:${({data}) => data === "1" ? `grid` : null};
    background-color:${({data}) => data==="1" ? "#ddd" : `white`}; 
    padding:0;
    margin:0;
    justify-items:center;
    grid-template-rows: repeat(5, 85px);
    grid-template-columns: repeat(3, 1fr);
`;

const OptionTabs = styled.div`
    display:flex;
    width:420px;
    box-sizing:border-box;
    align-items:center;
    border: 1px solid #ddd;
`;

const Option = styled.div`
    cursor:pointer;
    text-align:center;
    background-color:#eee;
    box-sizing:border-box;
    padding: 9px 0;
    width: 140px;
    &:not(:last-child) {
        border-right: 1px solid #ddd;
    }
`;