import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google"; // Police Poppins pour le corps et Bebas Neue pour les titres
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600"], // Corps de texte avec un peu plus de poids pour l'impact
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bebasNeue = Bebas_Neue({
  weight: "400", // Légère pour un effet plus fort sur les titres
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});
export const metadata: Metadata = {
  title: "AJ Toursim",
  description: "AJ Toursim",
    icons: {icon: "logo.png"},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`${poppins.variable} ${bebasNeue.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
