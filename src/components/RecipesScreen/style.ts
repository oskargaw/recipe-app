import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
`;

export const RecipesContainer = styled.div`
  padding: 2rem 2.5rem;
  box-shadow: 2px 0px 21px -7px rgba(66, 68, 90, 1);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 3rem 5rem;
  }
`;
