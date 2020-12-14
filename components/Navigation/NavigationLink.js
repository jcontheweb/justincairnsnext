import Link from "next/link";

export default function NavigationLink({ router, link, label, theme }) {
  const styles = {
    light: {
      active: "border-black text-black text-opacity-100",
      inactive: "border-transparent text-black text-opacity-75"
    },
    dark: {
      active: "border-white text-white text-opacity-100",
      inactive: "border-transparent text-white text-opacity-75",
    },
  }[theme][router.asPath.split("#")[1] == link.split("#")[1] ? "active" : "inactive"];

  return (
    <Link href={link}>
      <a
        className={`${styles} border-b-2 text-sm uppercase tracking-tight font-medium flex leading-none`}
      >
        {label}
      </a>
    </Link>
  );
}
