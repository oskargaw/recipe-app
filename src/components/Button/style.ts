import styled, { css } from "styled-components";
import { colors } from "../../theme";
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  box-shadow: 2px 0px 12px -7px rgba(66, 68, 90, 1);
  cursor: pointer;
  border-radius: 0.5rem;
  width: min-content;
  white-space: nowrap;
  outline: none;
  transition: all 0.15s ease-in;

  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: ${colors.blue[500]};
          color: ${colors.white};
          font-weight: 600;
          &:hover {
            background-color: ${colors.blueAlpha[900]};
          }
          &:active {
            background-color: ${colors.blue[500]};
            box-shadow: none;
          }
        `;
      case "secondary":
        return css`
          background-color: ${colors.gray[200]};
          color: ${colors.gray[900]};
          border: 1px solid ${colors.gray[300]};
          &:hover {
            background-color: ${colors.grayAlpha[600]};
          }
          &:active {
            background-color: ${colors.gray[200]};
            box-shadow: none;
          }
        `;
      case "warning":
        return css`
          background-color: ${colors.red[500]};
          color: ${colors.white};
          &:hover {
            background-color: ${colors.redAlpha[800]};
          }
          &:active {
            background-color: ${colors.red[500]};
            box-shadow: none;
          }
        `;
      default:
        return css`
          background-color: ${colors.blue[500]};
          color: ${colors.white};
          font-weight: 600;
          &:hover {
            background-color: ${colors.blueAlpha[900]};
          }
          &:active {
            background-color: ${colors.blue[500]};
            box-shadow: none;
          }
        `;
    }
  }}

  ${(props) => {
    switch (props.size) {
      case "sm":
        return css`
          padding: 0.5rem 2rem;
          font-size: 1rem;
        `;
      case "md":
        return css`
          padding: 1rem 5rem;
          font-size: 1.2rem;
        `;
      case "lg":
        return css`
          padding: 2rem 7rem;
          font-size: 1.5rem;
        `;
      default:
        return css`
          padding: 0.5rem 2rem;
          font-size: 1rem;
        `;
    }
  }}
`;
