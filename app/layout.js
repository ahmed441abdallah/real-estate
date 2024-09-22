"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { LoadScript } from "@react-google-maps/api";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname();
  const hideHeaderFooter = path === "/sign-in" || path == "/sign-out";
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}
            libraries={["places"]}
          ></LoadScript>
          {!hideHeaderFooter && <Header />}
          {children}
          {!hideHeaderFooter && <Footer />}
        </body>
      </html>
    </ClerkProvider>
  );
}
