import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";




const Navbar = () => {
  return (
    <div className="flex justify-between ml-2 my-2 font-mono">
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="font-bold text-lg">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-lg">Fighters</NavigationMenuTrigger>
            <NavigationMenuContent className="absolute z-50 mt-2">
              <NavigationMenuLink href="/fighters">Search</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/simulation" className="font-bold text-lg">
              Simulation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navbar;