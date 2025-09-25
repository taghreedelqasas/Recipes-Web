import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { Poppins, Roboto } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // تقدر تختاري السماكات
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
})

export const metadata: Metadata = {
  title: "Recipe App",
  description: " A simple recipe app built with Next.js and Tailwind CSS",
  viewport: { width: 'device-width', initialScale: 1, maximumScale: 1 },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <html lang="en" >
      <body   className={roboto.className} >
        <Navbar/>
          {/* <Header/> */}
          {children}
   
           {/* <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          footer
        </footer> */}
      </body>
   </html>
  );
}
