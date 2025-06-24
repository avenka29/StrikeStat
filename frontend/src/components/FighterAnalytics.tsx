import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const FighterAnalytics = () => {
  return (
    <div className="flex flex-col items-center font-mono">
      <div className="w-50 h-60 overflow-hidden rounded-md my-2">
        <img className="w-full h-full object-cover" src="/test.jpg" />
      </div>
      <h1 className="font-mono my-2 text-4xl">Islam Makhachev</h1>
      <div className="w-full max-w-md px-4 my-2">
        <Tabs defaultValue="Fighter Details">
          <TabsList className="flex justify-center w-full gap-4">
            <TabsTrigger value="Fighter Details">Fighter Details</TabsTrigger>
            <TabsTrigger value="Analytics">Analytics</TabsTrigger>
            <TabsTrigger value="Matches">Matches</TabsTrigger>
          </TabsList>
          <TabsContent value="Fighter Details">Make changes to your account here.</TabsContent>
          <TabsContent value="Analytics">Change your password here.</TabsContent>
          <TabsContent value="Matches">Add matches data.</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default FighterAnalytics