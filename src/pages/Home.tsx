// import React, { useState } from "react";
// import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import RecipeList from "../components/RecipeList";
// import Filter from "../components/Filter";

// import { Button } from "@/components/ui/button";
import { useRecipesInfiniteQuery } from "@/hooks/useRecipesInfiniteQuery";
import { useEffect, useState } from "react";
// import { Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useDebounce } from "use-debounce";
import useGetItems from "@/hooks/useGetItems";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
// import { RecipeListProps } from "@/types/Recipe";
// import { Recipe } from "@/types/Recipe";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchState] = useDebounce(searchTerm, 1000);
  const {
    data,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isFetching,
    isError,
  } = useRecipesInfiniteQuery();

  const { data: searchData, isFetching: isSearchFetching } = useGetItems(
    `https://dummyjson.com/recipes/search?q=${searchState}`
  );

  const elementRef = useIntersectionObserver({
    onIntersect: () => fetchNextPage(),
  });

  // const getNextItemData = () => {
  //   if (!isFetchingNextPage && hasNextPage) fetchNextPage();
  // };

  return (
    <div className="container mx-auto p-4">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {!isSearchFetching && searchState && (
          <RecipeList key={"search"} recipes={searchData.recipes} />
        )}

        {!isSearchFetching &&
          !searchState &&
          data?.pages.map((page, index) => (
            <RecipeList key={index} recipes={page.recipes} />
          ))}
        {!isSearchFetching && !searchState && <div ref={elementRef}>lol</div>}
      </div>
      {searchData?.recipes.length === 0 ? (
        <h1 className="text-center text-xl">No item found :(</h1>
      ) : (
        ""
      )}

      {/* {hasNextPage && (
        <Button
          onClick={() => fetchNextPage()}
          className="mt-4"
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading more..." : "Load More"}
        </Button>
      )} */}

      {(isFetching || isSearchFetching) && !isFetchingNextPage && (
        <p>Loading...</p>
      )}
      {isError && <p>Error fetching recipes :(</p>}
    </div>
  );
};

export default Home;
