// src/components/ui/pagination.tsx
import React from "react";
import { Button } from "./button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChange,
}) => {
  return (
    <nav className="flex items-center space-x-2 rounded-full hover:text-600  transition">
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
      >
        Prev
      </Button>
      {Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1;
        return (
          <Button
            key={page}
            size="sm"
            variant={page === currentPage ? "default" : "ghost"}
            onClick={() => onChange(page)}
          >
            {page}
          </Button>
        );
      })}
      <Button
        variant="outline"
        size="icon"
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
      >
        Next
      </Button>
    </nav>
  );
};
