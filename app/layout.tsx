/* eslint-disable @next/next/no-page-custom-font */
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Athviha Tours - Your Travel Agent",
  description:
    "Embark on extraordinary adventures, immerse yourself in diverse cultures, and create timeless memories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Paytone+One&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
