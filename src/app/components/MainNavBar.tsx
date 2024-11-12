import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsFont = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  style: "italic",
});

export default function MainNavBar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/" className={`${jetbrainsFont.className} text-xl`}>
          austinlong.dev
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link href="/projects">Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about">About</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
