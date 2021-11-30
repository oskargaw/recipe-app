import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../theme";

export const StyledRecipeModal = styled(motion.div)`
  background-color: ${colors.white};
  max-width: 90%;
  padding: 1.5rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    padding: 3rem 5rem;
  }
`;

export const RecipeModalHeader = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;
