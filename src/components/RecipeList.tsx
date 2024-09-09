import RecipeCard from "./RecipeCard";
import { RecipeListProps } from "@/types/Recipe";

const RecipeList: React.FC<RecipeListProps> = ({ recipes, filterState }) => {
  const filteredRecipes =
    filterState === "All"
      ? recipes
      : recipes.filter((recipe) => recipe.mealType.includes(filterState));

  return (
    <>
      {filteredRecipes.length > 0
        ? filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))
        : ""}
    </>
  );
};

export default RecipeList;
