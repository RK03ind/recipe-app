import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search recipes..."
        className="w-full"
      />
      <Button type="submit" className="btn-primary">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
