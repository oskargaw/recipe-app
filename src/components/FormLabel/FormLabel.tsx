import { StyledFormLabel } from "./style";

export interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, children }) => (
  <StyledFormLabel htmlFor={htmlFor}>{children}</StyledFormLabel>
);
