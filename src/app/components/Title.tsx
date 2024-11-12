import { JetBrains_Mono } from "next/font/google"
import { ReactNode } from "react";

const jetbrainsFont = JetBrains_Mono({
  weight: "700",
  subsets: ["latin"]
})

export default function Title({ children }: { children: ReactNode }) {
    return <h1 className={`${jetbrainsFont.className} text-4xl`}>{children}</h1>;
}
