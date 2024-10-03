// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Article App',
  description: 'Manage and view your articles',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <nav className="bg-gray-800 text-white p-4">
        <ul className="flex space-x-4">
          <li><Link href="/">Dashboard</Link></li>
          <li><Link href="/upload">Upload Article</Link></li>
          <li><Link href="/articles">View Articles</Link></li>
        </ul>
      </nav>
      <main className="container mx-auto mt-8 px-4">
        {children}
      </main>
      </body>
      </html>
  )
}