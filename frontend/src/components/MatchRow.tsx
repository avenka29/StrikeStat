import type { Match } from "@/models/match";
import { TableCell, TableRow } from "./ui/table";

interface MatchRowProps {
    match: Match;
    fighterName: string;
    event_title: string;
}

const MatchRow: React.FC<MatchRowProps> = ({ match, fighterName, event_title }) => {
    let opponent: string =
        match.left_fighter_name === fighterName
            ? match.right_fighter_name || "Unknown"
            : match.left_fighter_name || "Unknown";

    const decideColor = () => {
        if (match.winner_name == null) {
            return "bg-gray-100";
        } else if (match.winner_name === fighterName) {
            return "bg-green-100";
        } else {
            return "bg-red-100";
        }
    };

    return (
        <TableRow className={`${decideColor()} py-4 rounded-md`}>
            <TableCell className="font-medium">{event_title}</TableCell>
            <TableCell>{match.date}</TableCell>
            <TableCell>{opponent}</TableCell>
            <TableCell className="text-right">{match.method}</TableCell>
        </TableRow>
    );
};

export default MatchRow;
