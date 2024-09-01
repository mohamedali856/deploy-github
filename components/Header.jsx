import Link from "next/link";
import {Button} from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header class="py-8 xl:py-6 text-white">
            <div class="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 class="text-4xl font-semibold">
                        <span className="text-accent">M</span>ed<span className="text-accent">A</span>li<span class="text-accent">.</span>
                    </h1>
                </Link>
                {/* desktop nav */}
                <div class="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                    <Button>Hire me</Button>
                    </Link>
                </div>
                {/* mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}
export default Header;