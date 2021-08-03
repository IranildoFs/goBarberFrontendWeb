import styled from 'styled-components';

export const Container = styled.div`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 1rem;
    width: 100%;
    color: #666360;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 0.5rem;
    }

    input{
        flex:1;
        border: 0;
        color: #f4ede8;

        background: transparent;
            &::placeholder{
               color: #666360;
            }

            
    }

    svg{
        margin-right: 1rem;
    }
`;
