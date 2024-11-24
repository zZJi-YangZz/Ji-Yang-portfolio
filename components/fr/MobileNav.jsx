"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import {SwitchLanguage} from "../SwitchLanguage";

const links = [
  {
    name: "Accueil",
    path: "/fr/",
  },
  {
    name: "Résumé",
    path: "/fr/resume",
  },
  {
    name: "Projets",
    path: "/fr/work",
  },
  {
    name: "Contact",
    path: "/fr/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-orange-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Ji Yang<span className="text-orange-400">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-orange-400 border-b-2 border-orange-400"
                } text-xl capitalize hover:text-orange-400 transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
          <SwitchLanguage />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
