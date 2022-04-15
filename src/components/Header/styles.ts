import { motion } from "framer-motion";
import styled from "styled-components";
export const Container = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: var(--gray);
  padding: 0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;

  .logoContainer {
    display: flex;
    position: relative;
    align-items: baseline;
    font-size: 1.5rem;

    h1 {
      right: 28px;
      position: relative;
      font-family: "Roboto", sans-serif;
      font-weight: 800;
      pointer-events: none;
    }
  }

  .searchBox {
    display: flex;
    background: var(--shape);
    max-width: 32rem;
    padding: 0.25rem;
    border-radius: 0.25rem;

    input {
      display: flex;
      width: 100%;
      position: relative;
      height: 2.5rem;
      background-color: var(--shape);
      border: none;
      margin-right: 0.25rem;
    }
  }
`;

export const Button = styled(motion.button)`
  display: flex;
  position: relative;
  background: none;
  border: 0;
  width: 32px;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    height: 35px;
    width: 35px;
  }
`;
