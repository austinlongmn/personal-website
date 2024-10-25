import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";

export default function MainNavBar() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link href="/"><em>austinlong.dev</em></Link>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Link href="/projects">Projects</Link>
      </NavbarContent>
    </Navbar>
  );
}
