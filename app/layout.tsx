import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PSYC Aerospace",
  description: "Premium 3D drone website with realistic flight physics and cinematic animations",
  icons: {
    icon: [
      {
        url: "https://image.made-in-china.com/202f0j00QMJkfalqnVcd/E88-Drone-WiFi-Fpv-RC-Dron-with-Dual-PRO-4K-HD-Camera-Wide-Angle-Remote-Control-Video-Quadcopter-Toy-Drones-Drone-E88.webp",
        type: "image/webp",
      },
    ],
    shortcut: "https://image.made-in-china.com/202f0j00QMJkfalqnVcd/E88-Drone-WiFi-Fpv-RC-Dron-with-Dual-PRO-4K-HD-Camera-Wide-Angle-Remote-Control-Video-Quadcopter-Toy-Drones-Drone-E88.webp",
    apple: "https://image.made-in-china.com/202f0j00QMJkfalqnVcd/E88-Drone-WiFi-Fpv-RC-Dron-with-Dual-PRO-4K-HD-Camera-Wide-Angle-Remote-Control-Video-Quadcopter-Toy-Drones-Drone-E88.webp",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
