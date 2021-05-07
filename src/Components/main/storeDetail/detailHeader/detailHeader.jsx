import { useContext } from 'react'
import styled from "styled-components"
import { leftAllow, view } from "../../../../Svg/Button"
import { PostsContext } from "../../../../App"
import {Link} from "react-router-dom";

const DetailHeader = () => {
    const { setDetail, storeData} = useContext(PostsContext);
    const [label,market,tags,thumbnail] = storeData;

    const setDetailChange = () => {
        setDetail(false);
    }

    return (
        <DetailPage>
            <Header>
                <BackLink to={'/'}>
                    <BackButton onClick={setDetailChange}>{leftAllow}</BackButton>
                </BackLink>
                <StoreName>{`${label} ${market}`}</StoreName>
                <View>
                    <Emoji>{view}</Emoji>
                    <Number>{'20.6만'}</Number>
                </View>
            </Header>
            {tags && 
            <StoreImage>
                <Image thumbnail={thumbnail}></Image>
                {tags.length === 1 ?
                    // 시간로직을 짜서 00시가 지나면 전일시세 red컬러로 바꿔준다.
                    <Today>{tags[0]}</Today> 
                    : 
                    <div>
                        <Delivery>{tags[0]}</Delivery>
                        <Today>{tags[1]}</Today>
                    </div>
                }
            </StoreImage>
            }
        </DetailPage>
    )
}

export default DetailHeader;

const BackLink = styled(Link)`
    text-decoration:none;
    display: flex;
    align-items:center;
    padding-top:4px;
`;

const Today = styled.div`
    position:absolute;
    left: 5px;
    bottom: 10px;
    background-color:#48B130;
    border-radius:5px;
    color:white;
    padding:2px 5px;
`;
const Delivery = styled.div`
    position:absolute;
    left: 100px;
    bottom: 10px;
    background-color:#48B130;
    width:100px;
    text-align:center;
    border-radius:5px;
    color:white;
    padding:2px 5px;
`;

const Image = styled.div`
    background-image: url(${({thumbnail}) => `${thumbnail}`});
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
    height:100%;
`;

const StoreImage = styled.div`
    position:relative;
    width:420px;
    height:190px;
`;

const Emoji = styled.div``;
const Number = styled.div``;
const View = styled.div`
    position:absolute;
    display:flex;
    align-items:center;
    right: 10px;
`;

const StoreName=styled.div`
    position:absolute;
    left:50px;
`;

const BackButton = styled.div`
    position:absolute;
    cursor: pointer;
    left: 20px;
`;

const Header = styled.div`
    position:relative;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 50px;
`;

const DetailPage = styled.div`
    position:relative;
    top:0;
    background-color: red;
    width: 420px;
    z-index:5;
    background-color: #fff;
    height: 50px;
    border-bottom: 1px solid #ddd;
`;