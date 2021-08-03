import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div` 
    height: 100vh;

    display: flex;
    align-items: stretch;
`;
export const Content = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    width:100%;
    max-width: 700px;

    > h1{
        border-top: 0.2rem solid #7cfc00;
        border-bottom: 0.2rem solid #7cfc00;
        width: 12rem;
        text-align: center;
    }

    form{
        margin: 5rem 0;
        width: 340px;
        text-align: center;

        h1{
            margin-bottom: 1.5rem;
        }

        a{
            color: #f4ede8;
            display: block;
            margin-top: 1.5rem;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#f4ede8')}
            }
        }
    }

    > a{
        color: #7cfc00;
        display: block;
        margin-top: 1.5rem;
        text-decoration: none;
        transition: color 0.2s;

        display: flex;
        align-items: center;

        &:hover{
            color: ${shade(0.2, '#7cfc00')};
        }
    }


`;
export const Background = styled.div` 
    flex:1;
    background: url(${signInBackgroundImg}) no-repeat center;
    background-size: cover;
`;
