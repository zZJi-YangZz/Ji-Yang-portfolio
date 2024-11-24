"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "acceuil",
    path: "/fr",
  },
  {
    name: "résumé",
    path: "/fr/resume",
  },
  {
    name: "projets",
    path: "/fr/work",
  },
  {
    name: "contact",
    path: "/fr/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-orange-400 border-b-2 border-orange-400"
            } capitalize font-medium hover:text-orange-400 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;