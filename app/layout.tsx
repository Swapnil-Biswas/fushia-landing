import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "../components/ScrollProgress";
import DiscordJoinButton from "../components/DiscordJoinButton";
import ShaderBackground from "../components/ui/shader-background";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fushia | All-In-One Discord Bot",
  description: "Fushia is an all-in-one Discord bot for antinuke, automod, giveaways, logging, automation, and music.",
  icons: {
    icon: "/aqua-logo.png",
    shortcut: "/aqua-logo.png",
    apple: "/aqua-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ShaderBackground />
        <div className="relative z-10">
          <ScrollProgress />
          {children}
          <DiscordJoinButton />
        </div>
      </body>
    </html>
  );
}
