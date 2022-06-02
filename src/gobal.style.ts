import { createGlobalStyle } from 'styled-components';

interface Theme {
  dark?: boolean;
}

export const GlobalStyle = createGlobalStyle<Theme>`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body{
        background-color:${(props) => (props.dark ? 'black' : 'white')};
        color:${(props) => (props.dark ? 'white' : 'black')};
    }
`;
