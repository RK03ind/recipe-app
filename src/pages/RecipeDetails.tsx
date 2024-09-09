import React from "react";
import { useParams } from "react-router-dom";
import useGetItems from "../hooks/useGetItems"; // Custom hook to fetch data
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RecipeDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: recipe,
    isLoading,
    error,
  } = useGetItems(`https://dummyjson.com/recipes/${id}`);

  if (isLoading) return <p className="text-white text-center">Loading...</p>;
  if (error)
    return <p className="text-red-500 text-center">Error loading recipe.</p>;

  return (
    <div className="container mx-auto px-4 py-8 text-white ">
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Recipe Image */}
        <div className="lg:w-1/2">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Recipe Info */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <h1 className="text-4xl font-bold text-white mb-4">{recipe.name}</h1>

          {/* Cuisine and Difficulty */}
          <div className="flex justify-between text-lg text-gray-300 mb-4">
            <p>Cuisine: {recipe.cuisine}</p>
            <p>Difficulty: {recipe.difficulty}</p>
          </div>

          {/* Rating and Review Count */}
          <div className="flex items-center text-yellow-500 mb-4">
            <span className="text-2xl font-semibold">
              {recipe.rating.toFixed(1)}
            </span>
            <span className="text-sm text-gray-400 ml-2">
              ({recipe.reviewCount} reviews)
            </span>
          </div>

          {/* Prep, Cook Time, and Servings */}
          <div className="text-gray-400 mb-6">
            <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
            <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
            <p>Servings: {recipe.servings}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {recipe.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-purple-600 text-white px-2 py-1 rounded-md"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Ingredients */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2">
              {recipe.ingredients.map((ingredient: string, index: number) => (
                <li key={index} className="text-gray-300">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
            <ol className="list-decimal pl-5 space-y-2">
              {recipe.instructions.map((instruction: string, index: number) => (
                <li key={index} className="text-gray-300">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      {/* Calories Info */}
      <div className="mt-8 text-center text-gray-400">
        <p>Calories per Serving: {recipe.caloriesPerServing}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
