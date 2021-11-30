import styled from "styled-components";
import { colors } from "../../theme";

interface RecipeListItemContentProps {
  show: boolean;
}

export const RecipeListItemContainer = styled.div`
  background: ${colors.gray[100]};
  border-radius: 1rem;
  margin-bottom: 5px;
  padding: 0.7rem 1rem;
  margin-bottom: 1rem;
  color: ${colors.blackAlpha[700]};
  width: 100%;

  @media (min-width: 768px) {
    padding: 0.7rem 1.5rem;
  }
`;

export const RecipeListItemTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

export const RecipeListItemContent = styled.div<RecipeListItemContentProps>`
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: ${(props) => (props.show ? "9999px" : 0)};
  height: ${(props) => (props.show ? "auto" : "none")};
  transition: ${(props) =>
    props.show
      ? "all 0.5s cubic-bezier(1, 0, 1, 0)"
      : "all 0.5s cubic-bezier(0, 1, 0, 1)"};
`;

export const RecipeListItemIngredientsHeader = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 600;
  font-size: 0.7rem;

  @media (min-width: 768px) {
    padding: 0.9rem;
  }
`;

export const HorizontalLine = styled.hr`
  opacity: 0.3;
`;

export const RecipeListItemButtonGroup = styled.div`
  display: flex;
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    margin-top: 3rem;
  }
`;
