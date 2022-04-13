import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  background: -webkit-linear-gradient(0deg, hsla(210, 90%, 80%, 1) 0%, hsla(212, 93%, 49%, 1) 100%);
  padding: 0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;

  .logoContainer {
    display: flex;
    position: relative;
    align-items: baseline;
    font-size: 1.5rem;
    svg {
      
    }

    h1 {
      position: relative;
      font-family: "Roboto", sans-serif;
      font-weight: 800;
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
    }

    button {
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
        width: 100%;
      }
    }
  }
`;
