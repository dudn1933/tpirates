import { useContext } from 'react';
import styled from "styled-components"
import { PostsContext } from "../../../App"
import DetailHeader from "./detailHeader/detailHeader"
import InfoTab from './infoTab/infoTab';
import StoreInfo from "./storeInfo/storeInfo"

const StoreDetailPage = () => {
    const {detail, storeData} = useContext(PostsContext);
    return (
        <>
            {detail && storeData && 
            <Header>
                <DetailHeader />
                <StoreInfo />
                <InfoTab />
            </Header>
            }
        </>
    )
}

export default StoreDetailPage;

const Header = styled.div`
    width:420px;
    height:582px;
    box-sizing:border-box;
    background-color:#EEEE;
`;