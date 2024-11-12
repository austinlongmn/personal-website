import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
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
        <Link href="/" className={`${jetbrainsFont.className} text-xl`}>austinlong.dev</Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Link href="/projects">Projects</Link>
      </NavbarContent>
    </Navbar>
  );
}
