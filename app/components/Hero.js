import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

export function Hero() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Discover Amazing Products
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Find the perfect products for your needs with our curated selection
                    </p>

                    <div className="flex items-center justify-center space-x-2 mb-8">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="ml-2 text-lg">4.9/5 from 1000+ customers</span>
                    </div>

                    <div className="space-x-4">
                        <Link
                            href="/products"
                            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                        >
                            Browse Products
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="/login"
                            className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}