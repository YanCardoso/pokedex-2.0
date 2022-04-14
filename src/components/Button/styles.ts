import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.button)`
  width: 18rem;
  height: 3rem;
  position: relative;
  background-color: var(--gray);
  border-radius: 1rem;
  border: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    display: flex;
    padding: 0.25rem;
    width: inherit;
    height: inherit;
    object-fit: contain;
    pointer-events: none;
  }
`