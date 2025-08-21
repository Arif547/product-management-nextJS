import Link from 'next/link'
import { ShoppingBag, Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <ShoppingBag className="h-8 w-8 text-blue-400" />
                            <span className="text-2xl font-bold">ProductStore</span>
                        </div>
                        <p className="text-gray-400 mb-4 max-w-md">
                            Your one-stop shop for amazing products. We curate the best items
                            to help you find exactly what you&apos;re looking for.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Twitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                                <Linkedin className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="/login" className="text-gray-400 hover:text-white transition-colors">Sign In</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 ProductStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}