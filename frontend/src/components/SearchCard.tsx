import { IoPerson } from "react-icons/io5";

interface Props{
    name: string
}
const SearchCard: React.FC<Props> = ({name}) => {
    return (
        <div className="my-4 flex items-center">
            <IoPerson size={35} />
            <h1 className="ml-5 mt-3">{name}</h1>
        </div>
    )
}

export default SearchCard