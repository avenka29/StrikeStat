import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Flag from "react-world-flags";
import BioCard from "./BioCard";

const FighterAnalytics = () => {
  return (
    
    <div className="flex flex-col items-center ">
      <h1 className="flex items-center gap-4 my-2 text-4xl">
  Islam Makhachev
  <span
    className="bg-gray-100 rounded-md inline-flex overflow-hidden"
    style={{ width: 40, height: 32 }}
  >
    <Flag
      code="RU"
      style={{ width: 40, height: 32, borderRadius: 4, display: "block" }}
    />
  </span>
  {/* <span className="text-sm text-gray-600">Russia</span> */}
</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center my-4">
        <div className="w-50 h-68 overflow-hidden rounded-md ">
          <img className="w-full h-full object-cover" src="/test.jpg" />
        </div>
        <BioCard />
      </div>

      <div className="w-full px-4 my-2">
        <Tabs defaultValue="Analytics">
          <TabsList className="flex justify-center w-full gap-4">
            <TabsTrigger value="Analytics">Analytics</TabsTrigger>
            <TabsTrigger value="Matches">Matches</TabsTrigger>
          </TabsList>
          <TabsContent value="Analytics">
            Change your password here.
          </TabsContent>
          <TabsContent value="Matches">
            Add matches data.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default FighterAnalytics