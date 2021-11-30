import styled from "styled-components";
import { colors } from "../../theme";

export const StyledIngredientsListItem = styled.div`
  width: 85%;
  background-color: ${colors.white};
  margin-top: 0.8rem;
  border-radius: 0.4rem;
  padding: 0.7rem;
  font-size: 0.7rem;

  @media (min-width: 768px) {
    padding: 1rem;
    font-size: 0.8rem;
  }
`;
