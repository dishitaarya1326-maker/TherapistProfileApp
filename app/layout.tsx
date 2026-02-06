import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maya Reynolds Psychology",
  description: "Thoughtful therapy for anxiety, trauma, and burnout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <Header />
        <main className="w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}