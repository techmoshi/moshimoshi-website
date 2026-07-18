import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Moshi Moshi | AI-Native Marketing | Expect the Extra",
  description: "Pioneering AI-native marketing strategies. Creative storytelling and technical excellence at Moshi Moshi. Stand out by design.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} dark`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md text-body-md selection:bg-primary-container selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
