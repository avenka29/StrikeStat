import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"; // Assuming these components are available from shadcn/ui

const MatchesTable = () => {
  // Sample data for UFC fights with explicit winner and individual fighters
  const ufcMatches = [
    {
      id: "ufc-299-001",
      event: "UFC 299: O'Malley vs. Vera 2",
      date: "March 9, 2024",
      fighter1: "Sean O'Malley",
      fighter2: "Marlon Vera",
      weightClass: "Bantamweight",
      result: "O'Malley by UD", // UD: Unanimous Decision
      winner: "Sean O'Malley"
    },
    {
      id: "ufc-298-001",
      event: "UFC 298: Volkanovski vs. Topuria",
      date: "February 17, 2024",
      fighter1: "Alexander Volkanovski",
      fighter2: "Ilia Topuria",
      weightClass: "Featherweight",
      result: "Topuria by KO", // KO: Knockout
      winner: "Ilia Topuria"
    },
    {
      id: "ufc-297-001",
      event: "UFC 297: Strickland vs. Du Plessis",
      date: "January 20, 2024",
      fighter1: "Sean Strickland",
      fighter2: "Dricus Du Plessis",
      weightClass: "Middleweight",
      result: "Du Plessis by SD", // SD: Split Decision
      winner: "Dricus Du Plessis"
    },
    {
      id: "ufc-296-001",
      event: "UFC 296: Edwards vs. Covington",
      date: "December 16, 2023",
      fighter1: "Leon Edwards",
      fighter2: "Colby Covington",
      weightClass: "Welterweight",
      result: "Edwards by UD",
      winner: "Leon Edwards"
    },
    {
      id: "ufc-295-001",
      event: "UFC 295: Procházka vs. Pereira",
      date: "November 11, 2023",
      fighter1: "Jiří Procházka",
      fighter2: "Alex Pereira",
      weightClass: "Light Heavyweight",
      result: "Pereira by KO",
      winner: "Alex Pereira"
    }
  ];

  return (
    <div className="w-screen flex justify-center p-4 sm:p-6 md:p-8 bg-white font-inter">
      <div className="bg-white rounded-lg border border-gray-300 shadow-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 p-4 sm:p-6 text-center border-b border-gray-200">
          Professional Fight History
        </h2>
        <Table className="w-full text-left text-gray-800">
          <TableHeader className="bg-gray-100">
            <TableRow className="border-b border-gray-200">
              <TableHead className="px-4 py-3 text-sm font-semibold text-gray-700 uppercase tracking-wider rounded-tl-lg">
                Event
              </TableHead>
              <TableHead className="px-4 py-3 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Date
              </TableHead>
              <TableHead className="px-4 py-3 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Fighters
              </TableHead>
              <TableHead className="px-4 py-3 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Weight Class
              </TableHead>
              <TableHead className="px-4 py-3 text-sm font-semibold text-gray-700 uppercase tracking-wider text-right rounded-tr-lg">
                Result
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ufcMatches.map((match) => {
              // Determine if fighter1 won for coloring purposes
              const fighter1Won = match.winner === match.fighter1;
              const rowBgColorClass = fighter1Won ? 'bg-green-100' : 'bg-red-100'; // Light green/red for the row
              const rowHoverColorClass = fighter1Won ? 'hover:bg-green-200' : 'hover:bg-red-200'; // Slightly darker on hover
              // Text color for the result, adjusted for light background
              const resultTextColorClass = fighter1Won ? 'text-green-800' : 'text-red-800';

              return (
                <TableRow
                  key={match.id}
                  className={`
                    border-b border-gray-200
                    ${rowBgColorClass}
                    ${rowHoverColorClass}
                    transition-colors duration-200
                  `}
                >
                  <TableCell className="px-4 py-3 font-medium text-gray-900 text-sm sm:text-base">
                    {match.event}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-sm sm:text-base">
                    {match.date}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-sm sm:text-base">
                    {`${match.fighter1} vs. ${match.fighter2}`}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-sm sm:text-base">
                    {match.weightClass}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-right text-sm sm:text-base">
                    {/* Result text without the badge styling */}
                    <span className={`font-medium ${resultTextColorClass}`}>
                      {match.result}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default MatchesTable;
