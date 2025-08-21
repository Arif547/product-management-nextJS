'use client'
import Link from 'next/link'

import { ShoppingBag, User, LogOut } from 'lucide-react'

export function Navbar() {

    return (
        <header className="bg-white dark:bg-gray-900 shadow-lg transition-colors">
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


                    </div>
                </div>
            </div>
        </header>
    )
}