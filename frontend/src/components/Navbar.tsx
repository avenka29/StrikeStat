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
    <nav className="sticky top-0 flex justify-between my-2">
      <div className="">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="font-bold text-lg">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold text-lg">Fighters</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute z-50 mt-2 w-[200px] max-w-[90vw]">
                <NavigationMenuLink href="/fighters">Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="font-bold text-lg">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>


          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navbar;