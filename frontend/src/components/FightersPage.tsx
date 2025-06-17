import { Input } from "@/components/ui/input";
import { useRef } from "react";
import SearchCard from "./SearchCard";

const FightersPage = () => {
  const searchParam = useRef<HTMLInputElement>(null);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchParam.current?.value);
  }
  const fightersList = [
    { id: 1, name: "Jon Jones", gender: "Male" },
    { id: 2, name: "Daniel Cormier", gender: "Male" },
    { id: 3, name: "Conor McGregor", gender: "Male" },
    { id: 4, name: "Islam Makhachev", gender: "Male" },
    { id: 5, name: "Valentina Shevchenko", gender: "Female" },
    { id: 6, name: "Amanda Nunes", gender: "Female" },
    { id: 7, name: "Farhad Bhatti", gender: "Male" },
    { id: 8, name: "Rose Namajunas", gender: "Female" },
    { id: 9, name: "Some Guy", gender: "Male" }
  ];
  return (
    <div>
      <form onSubmit={handleSearch}>
        <Input placeholder="Enter name..." ref={searchParam} className="font-mono font-bold" />
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        {fightersList.map((fighter) => (
          <SearchCard key = {fighter.id} id={fighter.id} name={fighter.name} gender = {fighter.gender}/>
        ))}
      </div>


    </div>
  )
}

export default FightersPage;