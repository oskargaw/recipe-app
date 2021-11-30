import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "../../theme";

export const StyledRecipeModalOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${colors.blackAlpha[700]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
