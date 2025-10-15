import "./globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "chat app",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
