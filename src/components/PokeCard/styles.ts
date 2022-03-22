import styled from 'styled-components';
import background from '../../assets/pokebackground.png';




export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 250px;
    padding: 8px;
    border-radius: 10px;
    background-color: var(--grass);
    
    z-index: -2;

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
        background-position-y: 20px;
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        opacity: 0.2;
        border-radius: 10px;


    }
    `;

export const TextBox = styled.div`
display: flex;
flex: 1;
flex-direction: column;
position: relative;

    h1 {
        margin-bottom: 8px;
    }

    span {
        display: inline-block;
        position: relative;
        background-color: #fff;
        border-radius: 8px;
        text-align: center;
        max-width: 60px;
        padding: 2px 4px;
    }

    span + span {
        margin-top:8px;
    }
`


export const ContentCard = styled.div`
    display: flex;
    position: relative;
`
