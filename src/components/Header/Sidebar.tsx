import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { ReactNode } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <GiHamburgerMenu className="h-6 w-6 text-primary" />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="flex flex-col w-[250px] sm:w-[300px]"
        >
          <ul className="flex text-black flex-col gap-5 pt-14">
            <li key={"Home"} className="hover:text-red-700 cursor-pointer">
              <Link href={"/"}>Home </Link>
            </li>
            {children}
            <li key={"Contact"}>
              <Link
                href={"/contact"}
                className="bg-red-700 text-white px-5 py-3 rounded-md hover:bg-red-800 flex items-center gap-1 cursor-pointer justify-center my-3"
              >
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
