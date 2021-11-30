import { UseFormRegister } from "react-hook-form";
import { FormLabel } from "../FormLabel";
import { FormInputError, StyledFormInput } from "./style";

export interface FormInputProps {
  name: string;
  type: string;
  register: UseFormRegister<any>;
  label: string;
  placeholder?: string;
  defaultValues?: object;
  error?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  type,
  label,
  placeholder,
  register,
  error,
}) => (
  <>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <StyledFormInput
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
    <FormInputError>{error}</FormInputError>
  </>
);
