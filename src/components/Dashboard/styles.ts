import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: var(--shape);
  flex-direction: column;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 8px;
  z-index: -8;
`;

export const CardGrid = styled.div`
  display: grid;
  margin: 12px 0;
  position: relative;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  z-index: -6;
`
