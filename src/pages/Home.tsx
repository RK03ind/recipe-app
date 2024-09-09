import RecipeList from "../components/RecipeList";
import Navbar from "@/components/Navbar";
import { useRecipesInfiniteQuery } from "@/hooks/useRecipesInfiniteQuery";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import useGetItems from "@/hooks/useGetItems";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
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
    onIntersect: () => (hasNextPage ? fetchNextPage() : ""),
  });

  return (
    <div className="container mx-auto p-0 sm:p-4">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <div className="mt-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {!isSearchFetching && searchState && (
          <RecipeList
            key={"search"}
            recipes={searchData.recipes}
            filterState={selectedFilter}
          />
        )}

        {!isSearchFetching &&
          !searchState &&
          data?.pages.map((page, index) => (
            <RecipeList
              key={index}
              recipes={page.recipes}
              filterState={selectedFilter}
            />
          ))}
        {!isSearchFetching && !searchState && <div ref={elementRef}></div>}
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

      {(isFetching || isSearchFetching || isFetchingNextPage) && (
        <h1 className="bold text-center text-xl">Loading...</h1>
      )}
      {isError && (
        <p className="bold text-center text-xl">Error fetching recipes :(</p>
      )}
    </div>
  );
};

export default Home;
