import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  border-radius: 1.5rem;
  background: var(--shape);
  margin-bottom: 12px;
  padding: 1rem;
`;

export const HeaderMenu = styled.header`
  display: flex;
  position: relative;
  width: inherit;
  height: 5rem;

  ul {
    display: flex;
    height: 5rem;
    width: 100%;
    justify-content: space-around;

    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: var(--gray-text);
    gap: 1rem;

    li {
      display: flex;
      text-align: center;
      flex: 1;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      cursor: pointer;
    }
    .contentSelect {
      font-weight: 900;
      font-size: 1.1rem;
      border-bottom: 2px solid var(--gray-text);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 380px;

  .contentBox {
    margin-top: 1rem;
  }

  .contentAbout {
    table {
      font-family: "Roboto", sans-serif;
      width: 100%;
      border-collapse: collapse;
      color: var(--gray-text);

      hr {
        border: 0;
        border-bottom: 2px solid var(--gray-text);
        border-radius: 2px;
        opacity: 0.2;
        width: 10%;
        margin: 0.5rem auto 0 auto;
      }

      th {
        font-size: 1.25rem;
      }

      td,
      th {
        padding: 0.5rem;
      }
      td + td {
        color: var(--gray-text-700);
      }
    }
  }

  .contentBase {
    table {
      font-family: "Roboto", sans-serif;
      width: 100%;
      border-collapse: collapse;
      color: var(--gray-text);

      .baseValor {
        border: 0;
        height: 6px;
        background: var(--gray-text);
        border-radius: 6px;
        opacity: 0.2;
      }

      .currentValor {
        transform: translateY(-6px);
        border: 0;
        height: 6px;
        background: red;
        border-radius: 6px;
      }

      td:nth-of-type(1) {
        width: 10%;
      }

      td:nth-of-type(2) {
        text-align: center;
        width: 10%;
        color: var(--gray-text-700);
        font-weight: 900;
      }
      td:nth-of-type(3) {
        position: relative;
      }

      td {
        padding: 0.5rem;
      }
    }
  }

  .contentEvolution {
    height: 300px;
    width: 100%;
    background: green;
  }

  .contentMoves {
    height: 300px;
    width: 100%;
    background: yellow;
  }
`;
