import styled from"styled-components";
import { useState, useEffect } from 'react'
import { bannerData } from "../../json/demo_data";
import { Up, Down } from "../../Svg/Button";

const RollingBanner = () => {
    const transitionDefault = `all 0.5s ease-in-out`;
    const pannelHeight = 40;
    const [bannerList, setBannerList] = useState(bannerData);
    const virtualArray = bannerList.slice(0,1); // 0번 배열을 본배열 뒤에 하나 붙여주기위한 변수
    const [bannerHeight, setBannerHeight] = useState(pannelHeight);
    const [toggleButton, setToggleButton] = useState(Down);
    const [Y, setY] = useState(0);
    const [moving, setMoving] = useState(false);
    const [transitionValue, setTransitionValue] = useState(transitionDefault);

    useEffect(() => {
        const repeat = setTimeout(() => Slider(),1000);
        if (transitionValue === "none") setTransitionValue(transitionDefault);
        return () => clearTimeout(repeat);
      }, [Y]) // eslint-disable-line

    const bannerChange = (e) => {
        if(e.target.classList.contains("Down")) {
            setBannerHeight(40*bannerData.length);
            setToggleButton(Up);
        } else {
            setBannerHeight(40);
            setToggleButton(Down);
        }
    }
    
    const Slider = () => {
        if (moving) return;
        setY(Y-40);
        setMoving(true);
    }

    const onTransitionEnd = () => {
        setMoving(false);
        setTransitionValue("none");
        const last = bannerList.slice(1, bannerList.length);
        const result = last.concat(bannerList.slice(0, 1));
        setBannerList(result);
        setY(0);
        setMoving(false);
    }

    return (
        <Banner height={bannerHeight}>
            <Rolling Y={Y} transitionValue={transitionValue} onTransitionEnd={onTransitionEnd}>
                {bannerList.concat(virtualArray).map(({label,price,comment},index) => {
                    return <RollingList key={index}>{`${label} ${price} <${comment}>`}</RollingList>
                })}
            </Rolling>
            <ToggleBanner onClick={bannerChange}>{toggleButton}</ToggleBanner>
        </Banner>
    )
}

export default RollingBanner;

const ToggleBanner = styled.div`
    cursor:pointer;
    position:absolute;
    right:20px;
    top:8px;
`;

const Banner = styled.div`
    position:relative;
    height: ${({height}) => height ? `${height}px` : null};
    overflow:hidden;
`;

const Rolling = styled.div`
    transform: ${({Y}) => Y ? `translateY(${Y}px)` : null};
    transition: ${({ transitionValue }) => transitionValue};
`;

const RollingList = styled.div`
    background-color:#1c79bc;
    color: #fff;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    letter-spacing: -.75px;
    grid-column-start: 2;
    white-space: nowrap;
`;