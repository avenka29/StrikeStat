// src/pages/FightersPage.tsx
import React, { useState } from "react";
import SearchCard from "../components/SearchCard";
import { Pagination } from "@/components/ui/pagination";

interface Fighter {
  id: number;
  name: string;
  gender: string;
}

const fightersList: Fighter[] = [
  { id: 1, name: "Jon Jones", gender: "Male" },
  { id: 2, name: "Daniel Cormier", gender: "Male" },
  { id: 3, name: "Conor McGregor", gender: "Male" },
  { id: 4, name: "Islam Makhachev", gender: "Male" },
  { id: 5, name: "Valentina Shevchenko", gender: "Female" },
  { id: 6, name: "Amanda Nunes", gender: "Female" },
  { id: 7, name: "Farhad Bhatti", gender: "Male" },
  { id: 8, name: "Rose Namajunas", gender: "Female" },
  { id: 9, name: "Some Guy", gender: "Male" },
  { id: 10, name: "Israel Adesanya", gender: "Male" },
  { id: 11, name: "Stipe Miocic", gender: "Male" },
  { id: 12, name: "Francis Ngannou", gender: "Male" },
  { id: 13, name: "Kamaru Usman", gender: "Male" },
  { id: 14, name: "Weili Zhang", gender: "Female" },
  { id: 15, name: "Jessica Andrade", gender: "Female" },
  { id: 16, name: "Jorge Masvidal", gender: "Male" },
  { id: 17, name: "Colby Covington", gender: "Male" },
  { id: 18, name: "Dustin Poirier", gender: "Male" },
  { id: 19, name: "Max Holloway", gender: "Male" },
  { id: 20, name: "Robert Whittaker", gender: "Male" },
  // …add the rest of your fighters here
];

const FightersPage: React.FC = () => {
  const pageSize = 12;
  const pageCount = Math.ceil(fightersList.length / pageSize);

  const [page, setPage] = useState(1);
  const paginated = fightersList.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="px-4 py-6">
      {/* Fighters grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-4
        "
      >
        {paginated.map((f) => (
          <SearchCard
            key={f.id}
            id={f.id}
            name={f.name}
            gender={f.gender}
          />
        ))}
      </div>

      {/* Shadcn Pagination */}
      <div className="flex justify-center mt-6">
        <Pagination
          currentPage={page}
          totalPages={pageCount}
          onChange={(newPage: React.SetStateAction<number>) => setPage(newPage)}
        />
      </div>
    </div>
  );
};

export default FightersPage;
