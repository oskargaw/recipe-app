import styled from "styled-components";
import { colors } from "../../theme";

export const StyledFormTextArea = styled.textarea`
  margin: 1rem 0;
  height: 2rem;
  border: none;
  border-radius: 0.3rem;
  background-color: ${colors.gray[100]};
  padding: 0.5rem 1rem;
  outline: none;
  font-family: sans-serif;
`;
