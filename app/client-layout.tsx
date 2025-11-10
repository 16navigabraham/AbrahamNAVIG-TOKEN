"use client"

import type React from "react"
import { AppKitProvider } from '@reown/appkit'
import { appkit } from "./config/appkit"
import "./globals.css"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppKitProvider appkit={appkit}>
          {children}
        </AppKitProvider>
      </body>
    </html>
  )
}
