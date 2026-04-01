import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inspira Hotels – Search Hotels",
  description: "Find the best hotel deals with Inspiration Points rewards.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
