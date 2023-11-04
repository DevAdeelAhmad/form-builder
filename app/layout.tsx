import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import DesignerContextProvider from "@/components/DesignerContext"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Form Builder',
  description: 'Form Builder by DevAdeelAhmad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <body className={inter.className}>
          <DesignerContextProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex items-center justify-center">
                {children}
              </div>
              <Toaster />
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
