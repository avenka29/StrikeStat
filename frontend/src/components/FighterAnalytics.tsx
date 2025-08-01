import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Flag from "react-world-flags";
import BioCard from "./BioCard";
import MatchRow from "./MatchRow";

const FighterAnalytics = () => {
  const [matches, setMatches] = useState([]);

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name")!;

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/matchtry?name=${encodeURIComponent(name)}`
        );
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    }

    fetchMatches();
  }, [name]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="flex items-center gap-4 my-2 text-4xl">
        {name}
        <span
          className="bg-gray-100 rounded-md inline-flex overflow-hidden"
          style={{ width: 40, height: 32 }}
        >
          <Flag
            code="RU"
            style={{ width: 40, height: 32, borderRadius: 4, display: "block" }}
          />
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center my-4">
        <div className="w-50 h-68 overflow-hidden rounded-md ">
          <img className="w-full h-full object-cover" src="/test.jpg" />
        </div>
        <BioCard />
      </div>

      <div className="w-full px-4 my-2">
        <Tabs defaultValue="Matches">
          <TabsList className="flex justify-center w-full gap-4">
            <TabsTrigger value="Matches">Matches</TabsTrigger>
            <TabsTrigger value="Analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="Matches">
            {/* Wrap entire table in ScrollArea with fixed height and scroll */}
            <ScrollArea className="p-2 h-72 w-full rounded-md border">
              <Table>
                <TableCaption></TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Event</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Opponent</TableHead>
                    <TableHead className="text-right">Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {matches.map((match: any) => (
                    <MatchRow
                      key={match.id || match.event_title + match.date} // Add a stable key
                      match={match}
                      fighterName={name}
                      event_title={match.event_title}
                    />
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="Analytics">{/* Analytics content here */}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FighterAnalytics;
