import { UseFormRegister } from "react-hook-form";
import { FormLabel } from "../FormLabel";
import { StyledFormTextArea } from "./style";

export interface FormTextAreaProps {
  name: string;
  register: UseFormRegister<any>;
  label?: string;
  placeholder?: string;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  name,
  label,
  placeholder,
  register,
}) => (
  <>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <StyledFormTextArea {...register(name)} placeholder={placeholder} />
  </>
);
