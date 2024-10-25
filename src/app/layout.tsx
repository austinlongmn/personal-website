import type { Metadata } from "next";
import TopBar from "./components/MainNavBar";
import { Providers } from "./Providers";
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
      <body className="dark">
        <Providers>
          <div className="dark">
            <TopBar />
            <div className="">
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
