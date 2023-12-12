import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providers";
import Navbar from "@/components/ui/Navbar/Navbar";

export const metadata: Metadata = {
  title: "MediLab",
  description: "Doctor & Medical Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    { key: "1", level: "Home", href: "/" },
    { key: "2", level: "About", href: "/about" },
    { key: "3", level: "Contact", href: "/contact" },
  ];

  return (
    <html lang="en">
      <Providers>
        <body>
          <Navbar items={items} />
          {children}
        </body>
      </Providers>
    </html>
  );
}
