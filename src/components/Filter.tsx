import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  return (
    <Select onValueChange={onFilterChange}>
      <SelectTrigger className="my-4">
        <SelectValue placeholder="Diet Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">All</SelectItem>
        <SelectItem value="dark">Vegan</SelectItem>
        <SelectItem value="system">Gluten Free</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Filter;
