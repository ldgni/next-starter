import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/app/providers";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Next.js Starter",
  description: "Next.js starter template with TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-light text-sm text-dark antialiased sm:text-base dark:bg-dark dark:text-light`}>
        <Providers>
          <Container>
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
