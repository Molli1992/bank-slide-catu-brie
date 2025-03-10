import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mia y Tomi",
  description:
    "Usa nuestros datos bancarios para realizar un regalo a Mia y Tomi de forma rápida y segura",
  openGraph: {
    title: "Mia y Tomi",
    description:
      "Usa nuestros datos bancarios para realizar un regalo a Mia y Tomi de forma rápida y segura",
    images: [
      {
        url: "https://media.istockphoto.com/id/912149768/es/vector/icono-de-caja-de-regalo-simple-elemento-de-dise%C3%B1o-%C3%BAnico-color-aislado-en-blanco-regalo-dando.jpg?s=612x612&w=0&k=20&c=d9wQsDZAGTI_1b-hQ6X_6Y1oPVMM3D_YLJLUp8lYO88=",
        alt: "Mia y Tomi - Regalo",
      },
    ],
    siteName: "Mia y Tomi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mia y Tomi",
    description:
      "Usa nuestros datos bancarios para realizar un regalo a Mia y Tomi de forma rápida y segura",
    images: [
      "https://media.istockphoto.com/id/912149768/es/vector/icono-de-caja-de-regalo-simple-elemento-de-dise%C3%B1o-%C3%BAnico-color-aislado-en-blanco-regalo-dando.jpg?s=612x612&w=0&k=20&c=d9wQsDZAGTI_1b-hQ6X_6Y1oPVMM3D_YLJLUp8lYO88=",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <meta name="format-detection" content="telephone=no">
    
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Mia y Tomi" />
        <meta
          property="og:description"
          content="Usa nuestros datos bancarios para realizar un regalo a Mia y Tomi de forma rápida y segura"
        />
        <meta
          property="og:image"
          content="https://media.istockphoto.com/id/912149768/es/vector/icono-de-caja-de-regalo-simple-elemento-de-dise%C3%B1o-%C3%BAnico-color-aislado-en-blanco-regalo-dando.jpg?s=612x612&w=0&k=20&c=d9wQsDZAGTI_1b-hQ6X_6Y1oPVMM3D_YLJLUp8lYO88="
        />
        <meta property="og:image:width" />
        <meta property="og:image:height" />
        <meta property="og:image:alt" content="Mia y Tomi - Regalo" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mia y Tomi" />
        <meta
          name="twitter:description"
          content="Usa nuestros datos bancarios para realizar un regalo a Mia y Tomi de forma rápida y segura"
        />
        <meta
          name="twitter:image"
          content="https://media.istockphoto.com/id/912149768/es/vector/icono-de-caja-de-regalo-simple-elemento-de-dise%C3%B1o-%C3%BAnico-color-aislado-en-blanco-regalo-dando.jpg?s=612x612&w=0&k=20&c=d9wQsDZAGTI_1b-hQ6X_6Y1oPVMM3D_YLJLUp8lYO88="
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
