"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo1.png";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-20 items-center border-b-2 border-gray-100 px-3 lg:px-12 shadow-sm",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-full w-full items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <span className="sr-only">RESUMAGIC</span>
          <div className="flex items-center ml-4 mr-4">
            <Image
              src={logoSrc}
              alt="RESUMAGIC Logo"
              width={180}
              height={10}
              priority
            />
          </div>
        </Link>

        {/* Nav Buttons */}
        <nav
          aria-label="Site Nav Bar"
          className="flex items-center gap-4 text-base font-medium"
        >
          {/* Menu Items */}
          {[
           
            ["/resume-parser", "Parser"],
           
            
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100 focus-visible:bg-gray-100 transition"
              href={href}
            >
              {text}
            </Link>
          ))}

          {/* Build Resume Button */}
          <Link
            href="/resume-builder"
             className="rounded-md px-3 py-2 text-gray-600 hover:bg-gray-100 focus-visible:bg-gray-100 transition"
           
          >
            Build my resume
          </Link>
        </nav>
      </div>
    </header>
  );
};
