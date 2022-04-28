import { motion } from "framer-motion";
import styled from "styled-components";
import background from "../../assets/pokebackground.png";

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: inherit;
  padding: 8px;
  border-radius: 1.5rem;
  cursor: pointer;

  header {
    position: relative;
    z-index: 1;

    h1 {
      display: flex;
      position: relative;
      font-family: "Roboto", sans-serif;
      font-weight: 600;
      font-size: 2.5rem;
      flex-direction: row-reverse;
      color: #ffffff;
      pointer-events: none;
    }

    h2 {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
      color: #fff;
      pointer-events: none;
    }
  }

  &::after {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: 340px;
    position: absolute;
    background-position-x: 100px;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.1;
    border-radius: 1.5rem;
    pointer-events: none;
  }

  h3 {
    position: absolute;
    bottom: 0;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-size: 3rem;
    z-index: 1;
    opacity: 0.2;
    margin-bottom: 0.5rem;
    margin-left: 0.5rem;
    pointer-events: none;
  }
`;

export const TypeBox = styled(motion.div)`
  display: flex;
  position: relative;

  svg {
    margin-top: 0.5rem;
  }

  svg + svg {
    margin-left: 0.5rem;
  }
`;

export const ContentCard = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  justify-content: space-between;

  img {
    display: flex;
    flex: 2;
    max-width: 60%;
    object-fit: cover;
    z-index: 1;
    user-select: none;
    pointer-events: none;
  }
`;
