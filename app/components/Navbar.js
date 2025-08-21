'use client'
import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { ThemeToggle } from './ThemeToggle'
import { ShoppingBag, User, LogOut } from 'lucide-react'

export function Navbar() {
    const { data: session, status } = useSession()

    return (
        <nav className="bg-white dark:bg-gray-900 shadow-lg transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <ShoppingBag className="h-8 w-8 text-blue-600" />
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                ProductStore
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Link
                            href="/products"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                        >
                            Products
                        </Link>

                        {session ? (
                            <>
                                <Link
                                    href="/dashboard/add-product"
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors"
                                >
                                    Add Product
                                </Link>
                                <div className="flex items-center space-x-2">
                                    <User className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                        {session.user?.name}
                                    </span>
                                    <button
                                        onClick={() => signOut()}
                                        className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 px-3 py-2 text-sm font-medium transition-colors"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        <span>Sign Out</span>
                                    </button>
                                </div>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                            >
                                Sign In
                            </Link>
                        )}

                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    )
}