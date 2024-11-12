import type { Metadata } from "next";
import TopBar from "./components/MainNavBar";
import Providers from "./providers";
import "./globals.css"
import { JetBrains_Mono, Exo_2 } from "next/font/google";

const jetbrainsMonoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "700",
  style: "italic"
})

const exo2Font = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo-2"
})

export const metadata: Metadata = {
  title: "austinlong.dev",
  description: "Christ-centered developer"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMonoFont.variable} ${exo2Font.variable}`}>
      <body>
        <Providers>
          <div>
            <TopBar />
            <main className="container mx-auto max-w-5xl pt-2 md:pt-10 px-2 md:px-6">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
