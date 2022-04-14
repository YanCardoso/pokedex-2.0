import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  background: var(--shape);
  flex-direction: column;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 12px;
  min-height: 100vh;
  justify-content: space-between;

  .button-container {
    display: flex;
    position: relative;
    width: 100%;
    padding: 0 auto;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
  }
`;

export const CardGrid = styled(motion.div)`
  display: grid;
  margin: 12px 0;
  position: relative;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 12px;
`;
export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
`;
