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
  title: "Wed Gift Bank",
  description:
    "Hacenos tu regalo",
  openGraph: {
    title: "Wed Gift Bank",
    description:
      "Hacenos tu regalo",
    images: [
      {
        url: "https://media.istockphoto.com/id/912149768/es/vector/icono-de-caja-de-regalo-simple-elemento-de-dise%C3%B1o-%C3%BAnico-color-aislado-en-blanco-regalo-dando.jpg?s=612x612&w=0&k=20&c=d9wQsDZAGTI_1b-hQ6X_6Y1oPVMM3D_YLJLUp8lYO88=",
        alt: "Regalo",
      },
    ],
    siteName: "Wed Gift Bank",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wed Gift Bank",
    description:
      "Hacenos tu regalo",
    images: [
      "https://media.istockphoto.com/id/912149768/es/vector/icono-de-caja-de-regalo-simple-elemento-de-dise%C3%B1o-%C3%BAnico-color-aislado-en-blanco-regalo-dando.jpg?s=612x612&w=0&k=20&c=d9wQsDZAGTI_1b-hQ6X_6Y1oPVMM3D_YLJLUp8lYO88=",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="format-detection" content="telephone=no" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Wed Gift Bank" />
        <meta
          property="og:description"
          content="Hacenos tu regalo"
        />
        <meta
          property="og:image"
          content="https://media.istockphoto.com/id/912149768/es/vector/icono-de-caja-de-regalo-simple-elemento-de-dise%C3%B1o-%C3%BAnico-color-aislado-en-blanco-regalo-dando.jpg?s=612x612&w=0&k=20&c=d9wQsDZAGTI_1b-hQ6X_6Y1oPVMM3D_YLJLUp8lYO88="
        />
        <meta property="og:image:width" />
        <meta property="og:image:height" />
        <meta property="og:image:alt" content="Regalo" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wed Gift Bank" />
        <meta
          name="twitter:description"
          content="Hacenos tu regalo"
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
