import React from "react";
import RecipeCard from "./RecipeCard";
import { RecipeListProps } from "@/types/Recipe";

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    // <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} {...recipe} />
      ))}
    </>
  );
};

export default RecipeList;
