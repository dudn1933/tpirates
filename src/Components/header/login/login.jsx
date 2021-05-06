import styled from "styled-components";

const Login = () => {
    return (
        <Join>
            로그인/가입
        </Join>
    )
}

export default Login;

const Join = styled.div`
    cursor:pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    color: #999;
    font-size: 13px;
    letter-spacing: -.65px;
    line-height: 19px;
`;