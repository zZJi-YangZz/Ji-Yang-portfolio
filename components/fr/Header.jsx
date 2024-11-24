import Link from "next/link";
import { Button } from "../ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import {SwitchLanguage} from "../SwitchLanguage";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">

        {/* logo */}

        <Link href="/fr/">
          <h1 className="text-4xl font-semibold">
            Ji Yang<span className="text-orange-400">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/fr/contact">
            <Button>Embauchez-moi</Button>
          </Link>
          <SwitchLanguage />
        </div>

        {/* mobile nav */}
        
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;