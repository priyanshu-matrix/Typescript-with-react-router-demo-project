import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "~/components/ui/menubar";

import { ModeToggle } from "~/components/mode-toggle";
import { href } from "react-router";
import { NavLink } from "react-router";

export function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-10 w-full border-b bg-background">
        <div className="flex items-center px-4 py-2">
          <div className="text-xl font-bold mr-4"><NavLink to="/" end>MediConnect</NavLink></div>
          <Menubar className="border-none">
            <MenubarMenu>
              <MenubarTrigger>MedBot</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <NavLink to="/askai" end>
                  Ask MedBot 
                  </NavLink>
                  <MenubarShortcut>🦾</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>About</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem
                      onClick={() =>
                        window.open(
                          "https://github.com/priyanshu-matrix",
                          "_blank"
                        )
                      }
                    >
                      Github
                    </MenubarItem>
                    <MenubarItem
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/priyanshu-kumar-pandey-246116330/",
                          "_blank"
                        )
                      }
                    >
                      Linkedin
                    </MenubarItem>
                    <MenubarItem
                      onClick={() =>
                        window.open(
                          "https://priyanshupandey44449@gmail.com",
                          "_blank"
                        )
                      }
                    >
                      Email
                    </MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <div className="space-x-3 ml-auto">
            <ModeToggle />
          </div>
        </div>
      </header>
    </>
  );
}
