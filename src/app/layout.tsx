import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/Providers";

export const metadata: Metadata = {
  title: "MediLab",
  description: "Doctor & Medical Care",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
