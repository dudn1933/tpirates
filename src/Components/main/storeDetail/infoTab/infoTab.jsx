import {useState} from 'react'
import styled from "styled-components"
import PriceInfo from "./Price/PriceInfo"
import VisitStory from "./Price/VisitStory"


const InfoTab = () => {
    const [tabData,setTabData] = useState(0);
    const tabs = ['가격 정보','탐방기','리뷰','위치'];


    const dataChange = (e) => {
        setTabData(e.target.id);
    }

    const tabsContent = () => {
        if(tabData==="0"||tabData===0) {
            return <PriceInfo />
        } else if(tabData === "1") {
            return <VisitStory />
        }
    }

    return (
        <TabSection>
            <Tabs>
                {tabs.map((v,index) => {
                    return <TabButton key={index} id={index} tabData={tabData} onClick={dataChange}>{v}</TabButton>})
                }
            </Tabs>
            {tabsContent()}
        </TabSection>
    )
}

export default InfoTab;

const Tabs = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
    box-sizing:border-box;
`;

const TabSection = styled.ul`
    position: relative;
    top:189px;
    width:420px;
    height:42px;
    margin-top:10px;
    background-color:#EEEE;
    list-style:none;
    padding:0;
    border-top: 1px solid #ddd;
`;

const TabButton = styled.li`
    cursor: pointer;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    width:105px;
    height:42px;
    box-sizing:border-box;
    color: ${({id,tabData}) => `${id}` === `${tabData}` ?`#1c79bc` : `black`};
    background-color: ${({id,tabData}) => `${id}` === `${tabData}` ?`white` : `#EEEE`};
    border-bottom : ${({id,tabData}) => `${id}` === `${tabData}` ?`1px solid white` : `1px solid#ddd`};
    &:not(:last-child) {
        border-right: 1px solid #ddd;
    }
`;