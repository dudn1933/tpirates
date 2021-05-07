import React from 'react'
import styled from "styled-components"

const VisitStory = () => {
    return (
        <Story>
            <InfoImage />
            <StoreImage />
            <Desc>
                <Content>
                    강서수협 청정수산입니다.
                    <br></br>
                    <br></br>
                    넓은 수조를 사용하는 장점과
                    <br></br>
                    사장님의 푸근한 인상으로
                    <br></br>
                    후한 인심을 보실 수 있습니다.
                </Content>
            </Desc>
        </Story>
    )
}

export default VisitStory;

const Content = styled.p`
    margin:0;
    padding: 10px 15px;
    text-align:center;
    font-family: 'Noto Sans KR','맑은 고딕','Arial','Gulim';
    font-size: 14px;
    color: #555555;
    letter-spacing: -0.7px;
    line-height: 20px;
    font-weight: 400;
    text-decoration: none;
`;

const Desc = styled.div`
    background-color:white;
`;

const StoreImage = styled.div`
    width:420px;
    height:280px;
    background-image:url("https://cdn.tpirates.com/files/etc/2015/0708/f7e9dc4276145c5ad0f051ffeb39c422_FThumb.jpg");
    background-repeat:no-repeat;
    background-size:contain;
`;

const InfoImage = styled.div`
    width:420px;
    height:230px;
    background-image: url("https://cdn.tpirates.com/files/etc/2019/0802/971745c683510871b21218a42d65f7af_FThumb.jpg");
    background-repeat:no-repeat;
    background-size:contain;
`;

const Story = styled.div`
    width: 420px;
    box-sizing: border-box;
`;