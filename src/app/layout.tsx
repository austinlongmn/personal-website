import type { Metadata } from "next";
import TopBar from "./components/MainNavBar";
import Providers from "./providers";
import "./globals.css"

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
    <html lang="en">
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
