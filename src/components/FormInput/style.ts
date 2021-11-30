import styled from "styled-components";
import { colors } from "../../theme/index";

export const StyledFormInput = styled.input`
  margin: 1rem 0;
  height: 2rem;
  border: none;
  border-radius: 0.3rem;
  background-color: ${colors.gray[100]};
  padding: 0.5rem 1rem;
  outline: none;
  font-family: sans-serif;
  &:focus {
    border: 0.1px solid ${colors.gray[200]};
  }
`;

export const FormInputError = styled.div`
  font-size: 0.8rem;
  color: ${colors.red[500]};
  margin-bottom: 1rem;
`;
