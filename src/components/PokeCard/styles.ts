import styled from 'styled-components';
import background from '../../assets/pokebackground.png';


export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 220px;
    padding: 8px;
    border-radius: 1.5rem;    
    z-index: -2;

    header {
        h1 {
            font-family: 'Roboto', sans-serif;
            display: flex;
            font-weight: 600;
            font-size: 2.5rem;
            flex-direction: row-reverse;
            color: #ffffff;
            opacity: 0.6;
        }
    }

    img {
        display: flex;
        position: absolute;
        max-width: 50%;
        right: 0;
        bottom: 0;  
        object-fit: contain;
    }   

    &::after {
        background-image: url(${background});
        background-repeat: no-repeat;
        background-size: 340px;
        background-position-x: 80px;
        background-position-y: -20%;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0.2;
        border-radius: 1.5rem;
        
    }

    h3{
        position: absolute;
        bottom: 0;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 2rem;
        z-index: -1;
        opacity: 0.2;
        margin-bottom: 0.5rem;
        margin-left: 0.5rem;
    }
    `;

    export const TextBox = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;


    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 2rem;
        margin-bottom: 8px;
        color: #fff;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        display: inline-block;
        position: relative;
        border-radius: 1.5rem;
        text-align: center;
        width: 6rem;
        padding: 0.45rem;
        box-shadow: white 1px 1px;
    }

    span + span {
        margin-top: 8px;
    }

    
`

export const ContentCard = styled.div`
    display: flex;
    position: relative;

`
