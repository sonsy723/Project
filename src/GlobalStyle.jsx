import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
        }
    }

    .loginH1 {
        font-size: 40px;
        font-weight: bold;
        color: white;
    }

    .loginForm {
        width: 75%;
        height: 500px;
        margin: 50px auto;
        padding: 100px 20px 0px 20px;
        border-radius: 40px;
        background-color: #f5f5f5;
        display: block;
    }

    .loginLabel {
        text-align: left;
        font-size: 18px;
        font-weight: bold;
    }

    .loginInput{
        width: 450px;
        height: 40px;
        border-radius: 5px;
        padding-left: 20px;
        margin: auto;
        margin-left: 30px;
        margin-bottom: 30px;
        border: 0;
        border-bottom: 4px solid #aaaaaa;
        background-color: white;
    }

    .loginBtn{
        width: 600px;
        height: 50px;
        margin: 10px auto;
        border: 0;
        border-radius: 10px;
        font-size: 15px;
        color: white;
        font-weight: bold;
        background-color: #686868;
    }

`;
export default GlobalStyle;
