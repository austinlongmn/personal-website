import type { Metadata } from "next";
import TopBar from "./components/MainNavBar";
import Providers from "./providers";
import "./globals.css";
import { JetBrains_Mono, Exo_2 } from "next/font/google";
import Footer from "./components/Footer";

const jetbrainsMonoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "700",
  style: "italic"
});

const exo2Font = Exo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-exo-2"
});

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
    <html
      lang="en"
      className={`${jetbrainsMonoFont.variable} ${exo2Font.variable}`}>
      <body style={{}}>
        <Providers>
          <div>
            <TopBar />
            <div className="container mx-auto max-w-5xl pt-2 md:pt-10 px-2 md:px-6 ">
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
