import RecipeCard from "./RecipeCard";
import { RecipeListProps } from "@/types/Recipe";

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </>
  );
};

export default RecipeList;
