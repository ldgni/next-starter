"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/randomizer", label: "Randomizer" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <h1 className="font-bold sm:text-2xl">Next.js Starter</h1>
        <nav>
          <ul className="flex items-center justify-between gap-4 sm:gap-8">
            {navItems.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${
                    pathname === link.href
                      ? "underline decoration-dark underline-offset-4 dark:decoration-light"
                      : "opacity-75 transition-opacity duration-300 hover:opacity-100"
                  } `}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
