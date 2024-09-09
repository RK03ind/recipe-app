import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import React from "react";

import { Link } from "react-router-dom";

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  image: string;
  rating: number;
  reviewCount: number;
}

const RecipeCard: React.FC<Recipe> = ({
  id,
  name,
  image,
  prepTimeMinutes,
  cookTimeMinutes,
  cuisine,
  difficulty,
  tags,
  rating,
  reviewCount,
}) => {
  return (
    <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden  text-white">
      <Link to={`/recipe/${id}`}>
        <CardHeader className="relative">
          <img src={image} alt={name} className="w-full h-48 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-50 transition-opacity duration-300 flex justify-center items-center">
            <h2 className="text-white text-xl font-semibold">{name}</h2>
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4">
        {/* Cuisine and Difficulty */}
        <div className="flex justify-between mb-2">
          <span className="text-sm text-gray-300">Cuisine: {cuisine}</span>
          <span className="text-sm text-gray-300">
            Difficulty: {difficulty}
          </span>
        </div>

        {/* Rating and Review Count */}
        <div className="flex items-center space-x-2 text-yellow-500 mb-4">
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="text-sm text-gray-400">({reviewCount} reviews)</span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-purple-600 text-white px-2 py-1 rounded-md"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Prep and Cook Time */}
        <div className="text-gray-400">
          <p>Prep Time: {prepTimeMinutes} min</p>
          <p>Cook Time: {cookTimeMinutes} min</p>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Link
          to={`/recipe/${id}`}
          className="text-primary font-semibold hover:underline"
        >
          View Recipe →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
