import type React from "react"
import { Open_Sans, Chewy } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

const chewy = Chewy({
  variable: "--font-chewy",
  subsets: ["latin"],
  weight: "400",
})

export const metadata = {
  title: "MUGISHA Clement - Full Stack Developer",
  description: "Full Stack Web & Mobile Developer specializing in modern technologies and DevOps",
  generator: 'v0.app',
  icons: {
    icon: '/favicon_1.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${openSans.variable} ${chewy.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
