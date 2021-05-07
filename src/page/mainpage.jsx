import React from 'react'
import Header from "../Components/header/header";
import RollingBanner from "../Components/rollingBanner/rollingBanner";
import SelectFilter from "../Components/selectFilter/selectFilter";
import Main from "../Components/main/main";

const MainPage = () =>{
    return (
        <div>
            <Header />
            <RollingBanner />
            <SelectFilter />
            <Main />
        </div>
    )
}

export default MainPage