import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
    hasError: boolean
}

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;
    
    /* Força que os componentes fiquem lado a lado */
    display: flex;

    input {
        /* Ocupa o máximo de espaço possível, deixando espaço apenas para os outros componentes */
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0px;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0px;

        ${(props) =>
        props.hasError &&
        css`
            border-color: #C53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #04D361;
        border-radius: 0 5px 5px 0;
        border: 0px;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04D361')};
        }
    }
`

export const Error = styled.span`
    display: block;
    color: #C53030;
    margin-top: 8px;
`

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%auto;
        padding: 24px;
        display: block;
        text-decoration: none;
        
        display: flex;
        align-items: center;

        transition: 0.2s;

        /* Quando um elemento a for precedido de outro a */
        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px)
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #CBCBD6;
        }
    }
`