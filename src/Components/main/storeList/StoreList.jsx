import styled from "styled-components";
import { useContext } from "react";
import { PostsContext } from "../../../App";
import { commentsEmoji } from "../../../Svg/Button"
import { Link } from "react-router-dom";

const StoreList = ( {description,label,market,state,summary,tags,thumbnail}) => {
    const { setDetail, setStoreData } = useContext(PostsContext);
    
    const setDetailChange = () => {
        setDetail(true);
        setStoreData([label,market,tags,thumbnail]);
    }

    //  데이터를 fetch 받아서 한것이 아니고 상태관리로 하다보니 상세페이지에서 새로고침시 데이터 유실..
    return (
        <ImageLink to={`/${label}`}>
            { tags && (<Store onClick={setDetailChange}>
                <StoreImage thumbnail={thumbnail} />
                <StoreInformation>
                    <StoreLabel>{label}</StoreLabel>
                    <StoreName>{market}</StoreName>
                    <StoreDesc>{description}</StoreDesc>
                    {tags.length === 1 ?
                        // 시간로직을 짜서 00시가 지나면 전일시세 red컬러로 바꿔준다.
                        <Today>{tags[0]}</Today> 
                        : 
                        <div>
                            <Delivery>{tags[0]}</Delivery>
                            <Today>{tags[1]}</Today>
                        </div>
                    }
                    <StoreSituation>
                        <Rating>{`★ ${summary.rating}`}</Rating>
                        <Comments>
                            <Emoji>{commentsEmoji}</Emoji>
                            <CommentNumber>{summary.comments}</CommentNumber>
                        </Comments>
                        <BusinessStatus>{state === "OPEN" ? "영업중" : "영업종료"}</BusinessStatus>
                    </StoreSituation>
                </StoreInformation>
            </Store>
            )}
        </ImageLink>
    )
}

export default StoreList;

const ImageLink = styled(Link)`
    text-decoration:none;
    color:black;
    &:visited {
        color:black;
    }
`;

const BusinessStatus = styled.div`
    position:absolute;
    bottom:0;
    right:-210px;
    text-align: right;
    color: #1c79bc;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.65px;
`;

const CommentNumber = styled.div`
    position:absolute;
    bottom:0;
    left:22px;
    padding-left:10px;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.65px;
`;

const Emoji = styled.div`
`;

const Comments = styled.div`
    position:absolute;
    top:1px;
    left:25px;
    padding-left: 15px;
    color: #999999;
`;
const Rating = styled.div`
    color: #ff9300;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.65px;
`;
const StoreSituation = styled.div`
    position:absolute;
    bottom:15px;
`;

const Today = styled.div`
    position:absolute;
    left: 5px;
    bottom:10px;
    background-color:#48B130;
    border-radius:5px;
    color:white;
    padding:2px 5px;
`;
const Delivery = styled.div`
    background-color:#48B130;
    width:100px;
    text-align:center;
    border-radius:5px;
    color:white;
    padding:2px 5px;
`;

const StoreDesc = styled.div`
    color: #777777;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.65px;
`;

const StoreInformation = styled.div`
    padding: 15px 15px 10px;
    width:260px;
`;
const StoreLabel = styled.span``;
const StoreName = styled.span`
    margin-left: 5px;
    color: #777777;
    font-size: 13px;
    line-height: 19px;
    letter-spacing: -0.65px;
`;

const StoreImage = styled.div`
    width:130px;
    height:130px;
    background-image: url(${({thumbnail}) => `${thumbnail}`});
    background-size:contain;
`;

const Store = styled.div`
    position:relative;
    cursor:pointer;
    display:flex;
    width:420px;
    margin:5px 0px;
    box-sizing:border-box;
    border: 1px solid #ddd;
    border-right: none;
    border-left: none;
`;