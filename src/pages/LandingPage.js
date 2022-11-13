import React from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import { MoviesGrid } from "../components/MoviesGrid";

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);
  return (
    <div>
      <MoviesGrid key={debouncedSearch} search={debouncedSearch} />
    </div>
  );
}
