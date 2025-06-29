import { BsPersonStanding } from "react-icons/bs";
import { FaBirthdayCake, FaRulerVertical, FaTrophy } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const BioCard = () => {
    return (
        <div className="bg-gray-100  rounded-2xl p-6 max-w-md text-lg">
            <div className="bg-white px-4 py-2 rounded-md flex items-center gap-2">
                <FaBirthdayCake className="text-pink-800" /> Age: 22
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2">
                <FaTrophy className="text-yellow-700" /> Record: 27-1-0
            </div>
            <div className="bg-white px-4 py-2 rounded-md flex items-center gap-2">
                <FaLocationDot className="text-red-700" /> City: Makhachkala, Dagestan
            </div>
            <div className="bg-gray-100 px-4 py-2 rounded-md flex items-center gap-2">
                <FaRulerVertical className="text-green-700" /> Height: 5'10"
            </div>
            <div className="bg-white px-4 py-2 rounded-md flex items-center gap-2">
                <BsPersonStanding className="text-black-700" /> Stance: Southpaw
            </div>
        </div>
    )
}

export default BioCard