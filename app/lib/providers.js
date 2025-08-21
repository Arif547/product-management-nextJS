'use client'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './theme-context'

export function Providers({ children }) {
    return (
        <SessionProvider>
            <ThemeProvider>
                {children}
                <Toaster position="top-right" />
            </ThemeProvider>
        </SessionProvider>
    )
}