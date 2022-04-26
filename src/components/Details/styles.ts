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
    font-size: 1.2rem;
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
    }
    .contentSelect {
      font-weight: 900;
      border-bottom: 2px solid var(--gray-text);
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  min-height: 340px;

  .content-about {
    margin-top: 1rem;

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

      tr {
        background: white;
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
    display: none;
    height: 300px;
    width: 100%;
    background: red;
  }
`;
