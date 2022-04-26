import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: var(--grass);
  flex-direction: column;
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 12px;
  min-height: 100vh;
  justify-content: space-between;
`;

export const Content = styled.div`
  header {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    margin-top: 12px;
  }

  .nameSection {
    display: flex;
    color: white;
    position: relative;
    margin-top: 12px;
    justify-content: space-between;
    align-items: center;
    font-family: "Roboto", sans-serif;

    .contentName {
      h1 {
        font-size: 2.5rem;
        font-weight: 700;
      }
      .typeContainer {
        margin-top: 8px;
        svg + svg {
          margin-left: 8px;
        }
      }
    }
  }

  .imgSection {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    img {
      display: flex;
      object-fit: contain;
      position: relative;
      pointer-events: none;
      user-select: none;
      width: 100%;
      height: 350px;
      z-index: 1;
      transform: translateY(15%);
    }
  }
`;
