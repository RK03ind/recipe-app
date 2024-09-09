import axios from "axios";

export const fetchRecipes = async (page: number = 1) => {
  const { data } = await axios.get(
    `https://dummyjson.com/recipes?limit=10&skip=${
      page === 1 ? 0 : (page - 1) * 10
    }`
  );
  return data;
};

export const fetchRandomRecipe = async () => {
  function getRandomNumber() {
    return Math.floor(Math.random() * (50 - 1 + 1)) + 1;
  }

  const { data } = await axios.get(
    `https://dummyjson.com/recipes/${getRandomNumber()}`
  );
  return data;
};
