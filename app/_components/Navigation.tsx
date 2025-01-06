import Link from "next/link";

type TNavItem = {
  id: string;
  path: string;
  label: string;
};

const navItems: TNavItem[] = [
  {
    id: "cabins",
    label: "Cabins",
    path: "/cabins",
  },
  {
    id: "about",
    label: "About",
    path: "/about",
  },
  {
    id: "account",
    label: "Guest area",
    path: "/account",
  },
];

const Navigation = () => {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        {navItems.map((navItem) => (
          <li
            key={navItem.id}
            className="hover:text-accent-400 transition-colors"
          >
            <Link href={navItem.path}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
