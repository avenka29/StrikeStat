import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";


import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home - simple link, no dropdown */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className="p-2">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>


      
        {/* Fighters - dropdown item */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Fighters</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/fighters">Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar

