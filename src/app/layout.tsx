import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Navbar />
          <main>{children}</main>
        </AntdRegistry>
      </body>
    </html>
  );
}
