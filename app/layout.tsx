import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "House of Bhumi — Objects with a Soul",
  description:
    "Thoughtfully made objects for warm, conscious and beautiful living."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
