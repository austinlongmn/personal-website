import { Spacer } from "@nextui-org/react";
import { JetBrains_Mono } from "next/font/google"
import SyntaxHighlighter from "./components/SyntaxHighlighter";

const jetbrainsFont = JetBrains_Mono({
  weight: "700",
  subsets: ["latin"]
})

export default function Home() {
  return (
    <div>
      <h1 className={`${jetbrainsFont.className} text-3xl md:text-6xl`}>austinlong.dev</h1>
      <Spacer y={5} />
      <h2>Christ-centered software development</h2>
      <p>This website is currently under development.</p>
      <SyntaxHighlighter language="javascript">
        {`console.log("Hello, world!")`}
      </SyntaxHighlighter>
    </div>
  );
}
