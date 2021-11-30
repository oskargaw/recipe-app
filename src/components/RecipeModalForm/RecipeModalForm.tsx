import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  addRecipe,
  updateRecipe,
} from "../../state/recipes/recipes.actionCreators";
import { Recipe } from "../../types/recipes";
import { convertStringToArray } from "../../utils/stringToArrayConverter";
import { Button } from "../Button";
import { FormInput } from "../FormInput";
import { FormTextArea } from "../FormTextArea";
import { RecipeModalFormData } from "./RecipeModalForm.types";
import { recipeModalFormValidationSchema } from "./RecipeModalForm.validator";
import { RecipeModalFormButtonContainer, StyledRecipeModalForm } from "./style";

export interface RecipeModalFormProps {
  handleClose: () => void;
  recipe?: Recipe;
}

export const RecipeModalForm: React.FC<RecipeModalFormProps> = ({
  handleClose,
  recipe,
}) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, formState, reset } =
    useForm<RecipeModalFormData>({
      mode: "onBlur",
      resolver: yupResolver(recipeModalFormValidationSchema()),
      defaultValues: {
        recipeName: recipe?.name,
        recipeIngredients: recipe?.ingredients.toString(),
      },
    });
  const { errors } = formState;

  const onSubmit = ({ recipeName, recipeIngredients }: RecipeModalFormData) => {
    if (recipe) {
      const updatedRecipe = {
        ...recipe,
        name: recipeName,
        ingredients: convertStringToArray(recipeIngredients),
      };

      dispatch(updateRecipe(updatedRecipe));
    } else {
      const newRecipe = {
        id: new Date().getMilliseconds(),
        name: recipeName,
        ingredients: convertStringToArray(recipeIngredients),
      };

      dispatch(addRecipe(newRecipe));
    }

    reset();

    handleClose();
  };

  return (
    <StyledRecipeModalForm>
      <FormInput
        name="recipeName"
        type="text"
        register={register}
        label="Recipe:"
        placeholder="Recipe name"
        error={errors?.recipeName?.message}
      />

      <FormTextArea
        name="recipeIngredients"
        register={register}
        label="Ingredients:"
        placeholder="Enter ingredients separated by commas"
      />

      <RecipeModalFormButtonContainer>
        <Button variant="primary" size="md" onClick={handleSubmit(onSubmit)}>
          {`${recipe ? "Edit" : "Add"} recipe`}
        </Button>
      </RecipeModalFormButtonContainer>
    </StyledRecipeModalForm>
  );
};
