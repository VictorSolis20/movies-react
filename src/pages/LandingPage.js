import React from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch= useDebounce(search, 300);
  return (
    <div>
      <Search />
      <MoviesGrid key={debouncedSearch} search={debouncedSearch}/>
    </div>
  );
}
