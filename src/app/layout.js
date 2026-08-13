import { Inter, Geist } from "next/font/google";
import Script from "next/script";
import FloatingChatWidget from "@/components/FloatingChatWidget";
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
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body-md text-body-md selection:bg-primary-container selection:text-white antialiased" suppressHydrationWarning>
        {children}
        <FloatingChatWidget />
        <Script
          src="https://www.dante-ai.com/embed.js"
          data-agent-id="d3d5df1e-e725-43da-b551-b98905bd3953"
          data-widget-key="wk_mkEFmBJ6j1PV4hPvXuvTRQoQZDNoYIDf"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

