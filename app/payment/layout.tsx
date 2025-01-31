import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="overflow-hidden flex flex-col items-center justify-center">
          <NavBar />

          <div className="my-20">{children}</div>

          {/* Footer */}
          <div className="absolute bottom-0">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
