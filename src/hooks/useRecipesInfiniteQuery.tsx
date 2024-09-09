import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";
import axios from "axios";
import { Recipe } from "@/types/Recipe";

const fetchRecipes = async (context: QueryFunctionContext) => {
  const pageParam = context.pageParam || 0;
  const { data } = await axios.get(
    `https://dummyjson.com/recipes?limit=10&skip=${pageParam}`
  );
  return data;
};

export const useRecipesInfiniteQuery = () => {
  return useInfiniteQuery<Recipe, Error>({
    queryKey: ["recipe-pagination"],
    queryFn: fetchRecipes,
    getNextPageParam: (lastPage) => {
      return lastPage.skip + 10;
    },
    initialPageParam: 0,
  });
};
