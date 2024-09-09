import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./mode-toggle";
import { Filter, Search, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";

type NavbarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedFilter: string;
  setSelectedFilter: (filter: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedFilter,
  setSelectedFilter,
}) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleSurpriseMe = () => {
    const randomId = Math.floor(Math.random() * 50) + 1;
    navigate(`/recipe/${randomId}`);
  };

  return (
    <>
      <nav className="flex items-center justify-between py-3 px-4 bg-gray-800 text-white">
        <div className="text-lg font-bold">MyRecipeApp</div>
        <div className="flex gap-3">
          <div className="flex items-center bg-gray-900 rounded-md">
            <div
              className={`flex items-center transition-all duration-300 ${
                searchOpen ? "w-full  md:w-64 lg:w-80" : "w-0"
              } overflow-hidden`}
            >
              {searchOpen && (
                <Input
                  type="text"
                  className="w-full bg-gray-900 text-white rounded-l-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search..."
                />
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="bg-black text-white rounded-r-md"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">
                {searchOpen ? "Close search" : "Open search"}
              </span>
            </Button>
          </div>

          {/* <ModeToggle /> */}
        </div>
      </nav>

      <div className="flex justify-between items-center py-4 ">
        <Button
          variant="outline"
          className="px-3 py-3 flex items-center"
          onClick={handleSurpriseMe}
        >
          Surprise Me
          <Sparkles className="ml-2 h-4 w-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="px-3 py-3 flex items-center">
              <Filter className="mr-1 h-4 w-4" /> Filter:{" "}
              {selectedFilter || "All"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSelectedFilter("Breakfast")}>
              Breakfast
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("Lunch")}>
              Lunch
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("Dinner")}>
              Dinner
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("Dessert")}>
              Dessert
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("Appetizer")}>
              Appetizer
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedFilter("Side Dish")}>
              Side Dish
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default Navbar;
