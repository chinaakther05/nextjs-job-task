"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`
        relative px-1 py-2 font-medium transition-colors duration-300
        ${
          isActive
            ? "text-primary"
            : "text-gray-700 hover:text-primary"
        }
        after:content-['']
        after:absolute after:left-0 after:-bottom-1
        after:h-[2px] after:w-0 after:bg-primary
        after:transition-all after:duration-300
        hover:after:w-full
        ${isActive ? "after:w-full" : ""}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
