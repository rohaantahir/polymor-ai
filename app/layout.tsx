import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const switzerFont = localFont({
  src: [
    {
      path: "./fonts/Switzer/Switzer-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Switzer/Switzer-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Switzer/Switzer-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Switzer/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
})

export const metadata: Metadata = {
  title: "Polymor",
  description:
    "We aim to accelerate intelligence distribution across the globe by building a strong and synergetic ecosystem of AI DC, energy, cloud and finance solutions to democratize accessible, pervasive, and affordable intelligence.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${switzerFont.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
