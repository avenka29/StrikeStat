import { IoPerson } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface Props {
    id: number
    name: string
    gender: string
}

/**
 * SearchCard displays a fighter's name when user searches a name
 *
 * @param name - The name of the fighter to display.
 */
const SearchCard: React.FC<Props> = ({ name, gender, id }) => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(`/fighters/${id}`);
    }
    return (
        <div onClick={handleClick} className="p-2 flex shadow-sm sm:mx-2 my-2 items-center rounded-lg text-center cursor-pointer hover:bg-gray-100 transition">
            <IoPerson className={gender === "Male" ? "text-blue-300" : "text-pink-200"} size={35} />
            <h1 className="ml-5 mt-3">{name}</h1>
        </div>
    )
}

export default SearchCard