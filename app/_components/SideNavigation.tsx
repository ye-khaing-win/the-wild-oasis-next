"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import Link from "next/link";
// import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: (
      <CalendarDaysIcon className="h-5 w-5 text-primary-600" />
    ),
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

const SideNavigation = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={classNames(
                "py-3 px-5",
                "font-semibold text-primary-200",
                "hover:bg-primary-900 hover:text-primary-100",
                "flex items-center gap-4",
                "transition-colors",
                {
                  "bg-primary-900": pathname === link.href,
                }
              )}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;
