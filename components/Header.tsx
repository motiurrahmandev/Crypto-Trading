"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner flex items-center ">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Crypto Trading Logo"
            width={132}
            height={40}
            className="h-10 w-auto"
          />
          <p className="ml-2 text-xl font-bold">Crypto Trading</p>
        </Link>

        <nav className="flex items-center gap-4 ml-auto">
          <Link
            href="/"
            className={cn("nav-link", {
              "is-active": pathname === "/",
              "is-home":true,
            })}
          >
            Home{" "}
          </Link>
          <p>Search Modal</p>
          <Link
            href="/coins"
            className={cn("nav-link", {
              "is-active": pathname === "/coins",
            })}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
