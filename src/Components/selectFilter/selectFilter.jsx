import styled from "styled-components"; 

const SelectFilter = () => {
    const optionList = ["모든 지역", "모든 품목", "기본 순"];
    return (
        <OptionTabs>
            {optionList.map(v => {
                return <Option>{`${v} ▾`}</Option>
            })}
        </OptionTabs>
    )
}

export default SelectFilter;

const OptionTabs = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    border: 1px solid #ddd;
`;

const Option = styled.div`
    cursor:pointer;
    text-align:center;
    background-color:#eee;
    padding: 10px 0;
    width: 140px;
    
    &:not(:last-child) {
        border-right: 1px solid #ddd;
    }
`;