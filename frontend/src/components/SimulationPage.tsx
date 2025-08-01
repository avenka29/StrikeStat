import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { GiBoxingGlove } from "react-icons/gi";
import { IoPerson, IoSearch } from "react-icons/io5";
import SearchCard from "./SearchCard";

interface Fighter {
  id: number;
  name: string;
  gender: string;
  weightClass?: string;
  record?: string;
  avatarUrl?: string;
}

const fightersList: Fighter[] = [
  { id: 1, name: "Jon Jones", gender: "Male", weightClass: "Light Heavyweight", record: "27-1-0" },
  { id: 2, name: "Daniel Cormier", gender: "Male", weightClass: "Heavyweight", record: "22-3-0" },
  { id: 3, name: "Conor McGregor", gender: "Male", weightClass: "Lightweight", record: "22-6-0" },
  { id: 4, name: "Islam Makhachev", gender: "Male", weightClass: "Lightweight", record: "25-1-0" },
  { id: 5, name: "Valentina Shevchenko", gender: "Female", weightClass: "Flyweight", record: "23-4-0" },
  { id: 6, name: "Amanda Nunes", gender: "Female", weightClass: "Bantamweight", record: "23-5-0" },
  { id: 7, name: "Farhad Bhatti", gender: "Male", weightClass: "Welterweight", record: "15-3-0" },
  { id: 8, name: "Rose Namajunas", gender: "Female", weightClass: "Strawweight", record: "11-5-0" },
  { id: 9, name: "Israel Adesanya", gender: "Male", weightClass: "Middleweight", record: "24-3-0" },
  { id: 10, name: "Stipe Miocic", gender: "Male", weightClass: "Heavyweight", record: "20-4-0" },
];

const SimulationPage = () => {
  const [selectedFighter1, setSelectedFighter1] = useState<Fighter | null>(null);
  const [selectedFighter2, setSelectedFighter2] = useState<Fighter | null>(null);
  const [showFighterList1, setShowFighterList1] = useState(false);
  const [showFighterList2, setShowFighterList2] = useState(false);
  const [searchQuery1, setSearchQuery1] = useState("");
  const [searchQuery2, setSearchQuery2] = useState("");

  const handleFighterSelect = (fighter: Fighter, side: 1 | 2) => {
    if (side === 1) {
      setSelectedFighter1(fighter);
      setShowFighterList1(false);
    } else {
      setSelectedFighter2(fighter);
      setShowFighterList2(false);
    }
  };

  const handleStartSimulation = () => {
    if (selectedFighter1 && selectedFighter2) {
      // TODO: Implement simulation logic
      console.log("Starting simulation between", selectedFighter1.name, "and", selectedFighter2.name);
    }
  };

  const filteredFighters1 = fightersList.filter(fighter =>
    fighter.name.toLowerCase().includes(searchQuery1.toLowerCase())
  );

  const filteredFighters2 = fightersList.filter(fighter =>
    fighter.name.toLowerCase().includes(searchQuery2.toLowerCase())
  );



  const FighterSection = ({ 
    title, 
    selectedFighter, 
    onSelectFighter, 
    showList, 
    setShowList, 
    side,
    searchQuery,
    setSearchQuery,
    filteredFighters
  }: {
    title: string;
    selectedFighter: Fighter | null;
    onSelectFighter: (fighter: Fighter) => void;
    showList: boolean;
    setShowList: (show: boolean) => void;
    side: 1 | 2;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredFighters: Fighter[];
  }) => (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center font-mono">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {selectedFighter ? (
          <div className="text-center">
            <div className="max-w-xs mx-auto">
              <SearchCard
                id={selectedFighter.id}
                name={selectedFighter.name}
                gender={selectedFighter.gender as "Male" | "Female"}
                avatarUrl={selectedFighter.avatarUrl}
                weightClass={selectedFighter.weightClass}
                record={selectedFighter.record}
              />
            </div>
            <Button 
              variant="outline" 
              className="mt-2 w-full sm:w-auto"
              onClick={() => {
                setShowList(!showList);
                setSearchQuery("");
              }}
            >
              Change Fighter
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <div className="h-24 sm:h-32 w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <IoPerson size={32} className="sm:w-12 sm:h-12 mx-auto text-gray-400 mb-1 sm:mb-2" />
                <p className="text-xs sm:text-sm text-gray-500">No fighter selected</p>
              </div>
            </div>
            <Button 
              className="mt-2 w-full sm:w-auto"
              onClick={() => setShowList(!showList)}
            >
              Select Fighter
            </Button>
          </div>
        )}

        {showList && (
          <div className="mt-4 space-y-3">
            <div className="relative">
              <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search for a fighter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
                autoFocus
              />
            </div>
            
            <div className="max-h-64 overflow-y-auto border rounded-lg">
              {filteredFighters.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">
                  {filteredFighters.map((fighter) => (
                    <div
                      key={fighter.id}
                      className="cursor-pointer flex justify-center"
                      onClick={() => onSelectFighter(fighter)}
                    >
                      <SearchCard
                        id={fighter.id}
                        name={fighter.name}
                        gender={fighter.gender as "Male" | "Female"}
                        avatarUrl={fighter.avatarUrl}
                        weightClass={fighter.weightClass}
                        record={fighter.record}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  <p className="text-sm">No fighters found</p>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold font-mono mb-2">Fight Simulation</h1>
        <p className="text-sm sm:text-base text-gray-600 px-2">Select two fighters to simulate a match</p>
      </div>

      <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
        <FighterSection
          title="Fighter 1"
          selectedFighter={selectedFighter1}
          onSelectFighter={(fighter) => handleFighterSelect(fighter, 1)}
          showList={showFighterList1}
          setShowList={setShowFighterList1}
          side={1}
          searchQuery={searchQuery1}
          setSearchQuery={setSearchQuery1}
          filteredFighters={filteredFighters1}
        />

        <div className="flex items-center justify-center py-2">
          <div className="text-center">
            <GiBoxingGlove size={32} className="sm:w-12 sm:h-12 text-red-300 mx-auto mb-1 sm:mb-2" />
            <p className="text-xs sm:text-sm text-gray-500">VS</p>
          </div>
        </div>

        <FighterSection
          title="Fighter 2"
          selectedFighter={selectedFighter2}
          onSelectFighter={(fighter) => handleFighterSelect(fighter, 2)}
          showList={showFighterList2}
          setShowList={setShowFighterList2}
          side={2}
          searchQuery={searchQuery2}
          setSearchQuery={setSearchQuery2}
          filteredFighters={filteredFighters2}
        />
      </div>

      <div className="text-center px-2">
        <Button
          size="lg"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg"
          disabled={!selectedFighter1 || !selectedFighter2}
          onClick={handleStartSimulation}
        >
          Start Simulation
        </Button>
      </div>

      {selectedFighter1 && selectedFighter2 && (
        <div className="mt-6 sm:mt-8 text-center px-2">
          <Card className="max-w-md mx-auto">
            <CardContent className="p-3 sm:p-4">
              <h3 className="font-mono font-semibold mb-2 text-sm sm:text-base">Match Preview</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm truncate flex-1 text-left pr-2">{selectedFighter1.name}</span>
                <span className="text-xs text-gray-500 px-2 flex-shrink-0">VS</span>
                <span className="text-xs sm:text-sm truncate flex-1 text-right pl-2">{selectedFighter2.name}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SimulationPage;