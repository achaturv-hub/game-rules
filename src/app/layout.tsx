import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "GameRules Ai",
  icons: "/chat-bot-icon.png"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <main className=" h-full text-white relative">
           {children}
        </main>
      </body>
    </html>
  );
}
