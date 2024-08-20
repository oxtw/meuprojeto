import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header/index";

export const metadata: Metadata = {
  title: "Meu site - Aprendendo nextJS",
  description: "Site completo em nextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
