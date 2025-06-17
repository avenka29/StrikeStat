import { Input } from "@/components/ui/input";
import { useRef } from "react";
import SearchCard from "./SearchCard";

const FightersPage = () => {
  const searchParam = useRef<HTMLInputElement>(null);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchParam.current?.value);
  }
  const fightersList: string[] = ["Jon Jones", "Daniel Cormier", "Conor McGregor", "Islam Makhachev", "Some Guy", "Farhad Bhatti"]
  return (
    <div>
      <form onSubmit={handleSearch}>
        <Input placeholder="Enter name..." ref={searchParam} className="font-mono font-bold" />
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        {fightersList.map((fighter) => (
          <SearchCard key={fighter} name={fighter} />
        ))}
        <SearchCard name="Daniel Cormier" />
      </div>


    </div>
  )
}

export default FightersPage;