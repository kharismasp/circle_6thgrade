import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Circle Studio · Think in Shapes",
  description: "24 interactive circle challenges. Explore, find a strategy, and try it for yourself.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
