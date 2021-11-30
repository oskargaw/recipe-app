import * as Yup from "yup";

export const recipeModalFormValidationSchema = () => {
  const validationSchema = Yup.object().shape({
    recipeName: Yup.string().required(
      "Oops, seems like you didn't provide a recipe name"
    ),
    recipeIngredients: Yup.string(),
  });

  return validationSchema;
};
