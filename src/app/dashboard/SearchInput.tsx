"use client";
import { Search} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

 
export default function SearchInput() {
  const [term, setTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      router.push(`/dashboard/search?q=${term}`);
      setTerm("");
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2        rounded-lg  shadow-lg      ">
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search Recipes and more ... "
        className="rounded-3xl   px-5  w-40   md:w-80   text-sm     text-white "

      />
      <button type="submit" className="bg-blue-500 md:px-4 md:py-2 rounded  px-2 py-1   text-white">
        <Search className="md:w-6  md:h-6   w-3  h-3  text-white"    />
      </button>
    </form>
  );
}
