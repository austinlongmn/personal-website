import { Spacer } from "@nextui-org/react";
import StartupAnimation from "./components/StartupAnimation";
import { Link } from "@nextui-org/react";

export default function Home() {
  return (
    <div>
      <h1>&gt; <StartupAnimation /></h1>
      <Spacer y={5} />
      <h2>Christ-centered software development</h2>
      <p>Get to know me on the <Link href="/about">About</Link> page!</p>
      
    </div>
  );
}
