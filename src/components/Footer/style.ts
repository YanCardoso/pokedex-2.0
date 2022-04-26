import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.footer)`
  display: flex;
  position: relative;
  background: var(--gray);
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.5rem;

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;
