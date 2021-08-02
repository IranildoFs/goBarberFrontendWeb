import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:0;
    }
    @media(max-width: 1000px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px){
        html{
            font-size: 85%;
        }
    }
    @media(max-width: 300px){
        html{
            font-size: 79%;
        }
    }   

    body{
        background: #312e38;
        color: #fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
    }
    
    button{
        cursor:pointer;
    }
`;
