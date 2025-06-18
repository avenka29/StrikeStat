import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { IoMdSearch } from "react-icons/io";
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
    { id: 21, name: "Brian Ortega", gender: "Male" },
    { id: 22, name: "Henry Cejudo", gender: "Male" },
    { id: 23, name: "Sean O'Malley", gender: "Male" },
    { id: 24, name: "Zhang Weili", gender: "Female" },
    { id: 25, name: "Joanna Jędrzejczyk", gender: "Female" },
    { id: 26, name: "Tatiana Suarez", gender: "Female" },
    { id: 27, name: "Mackenzie Dern", gender: "Female" },
    { id: 28, name: "Ronda Rousey", gender: "Female" },
    { id: 29, name: "Nate Diaz", gender: "Male" },
    { id: 30, name: "Nick Diaz", gender: "Male" },
    { id: 31, name: "Anderson Silva", gender: "Male" },
    { id: 32, name: "Chuck Liddell", gender: "Male" },
    { id: 33, name: "BJ Penn", gender: "Male" },
    { id: 34, name: "Georges St-Pierre", gender: "Male" },
    { id: 35, name: "Michael Bisping", gender: "Male" },
    { id: 36, name: "Derrick Lewis", gender: "Male" },
    { id: 37, name: "Alistair Overeem", gender: "Male" },
    { id: 38, name: "Jon Fitch", gender: "Male" },
    { id: 39, name: "Cris Cyborg", gender: "Female" },
    { id: 40, name: "Holly Holm", gender: "Female" },
    { id: 41, name: "Cat Zingano", gender: "Female" },
    { id: 42, name: "Glover Teixeira", gender: "Male" },
    { id: 43, name: "Frankie Edgar", gender: "Male" },
    { id: 44, name: "Jose Aldo", gender: "Male" },
    { id: 45, name: "Anthony Pettis", gender: "Male" },
    { id: 46, name: "Fabricio Werdum", gender: "Male" },
    { id: 47, name: "T.J. Dillashaw", gender: "Male" },
    { id: 48, name: "Dominick Cruz", gender: "Male" },
    { id: 49, name: "Henry Cejudo", gender: "Male" },
    { id: 50, name: "Valerie Letourneau", gender: "Female" },
    { id: 51, name: "Miesha Tate", gender: "Female" },
    { id: 52, name: "Randy Couture", gender: "Male" },
    { id: 53, name: "Dan Henderson", gender: "Male" },
    { id: 54, name: "Matt Hughes", gender: "Male" },
    { id: 55, name: "Frank Mir", gender: "Male" },
    { id: 56, name: "Royce Gracie", gender: "Male" },
    { id: 57, name: "Mark Hunt", gender: "Male" },
    { id: 58, name: "Khabib Nurmagomedov", gender: "Male" },
    { id: 59, name: "Junior dos Santos", gender: "Male" },
    { id: 60, name: "Ben Askren", gender: "Male" },
    { id: 61, name: "Paulo Costa", gender: "Male" },
    { id: 62, name: "Israel Adesanya", gender: "Male" },
    { id: 63, name: "Justin Gaethje", gender: "Male" },
    { id: 64, name: "Darren Till", gender: "Male" },
    { id: 65, name: "Demian Maia", gender: "Male" },
    { id: 66, name: "Kevin Lee", gender: "Male" },
    { id: 67, name: "Jared Cannonier", gender: "Male" },
    { id: 68, name: "Cynthia Calvillo", gender: "Female" },
    { id: 69, name: "Aspen Ladd", gender: "Female" },
    { id: 70, name: "Marina Rodriguez", gender: "Female" },
    { id: 71, name: "Angela Hill", gender: "Female" },
    { id: 72, name: "Liz Carmouche", gender: "Female" },
    { id: 73, name: "Mackenzie Dern", gender: "Female" },
    { id: 74, name: "Jessica Eye", gender: "Female" },
    { id: 75, name: "Tatiana Suarez", gender: "Female" },
    { id: 76, name: "Jessica Andrade", gender: "Female" },
    { id: 77, name: "Zhang Weili", gender: "Female" },
    { id: 78, name: "Joanna Jędrzejczyk", gender: "Female" }
  ]
  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex justify-center">
          <button type="submit" aria-label="Search" className="p-2 rounded-l-lg bg-black text-white hover:bg-gray-300">
            <IoMdSearch size={20} />
          </button>
          <Input placeholder="Enter name..." ref={searchParam} className="font-mono font-bold" />
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-3">

        {fightersList.map((fighter) => (
          <SearchCard key={fighter.id} id={fighter.id} name={fighter.name} gender={fighter.gender} />
        ))}
      </div>


    </div>
  )
}

export default FightersPage;