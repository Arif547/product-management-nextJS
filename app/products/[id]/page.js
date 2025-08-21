import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProductById } from '@/app/lib/db'
import { ArrowLeft, Calendar, DollarSign } from 'lucide-react'

export default async function ProductDetailsPage({ params }) {
    const { id } = params
    const product = await getProductById(id)

    if (!product) {
        notFound()
    }

    return (
        <div className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link
                    href="/products"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 transition-colors"
                >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Back to Products
                </Link>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2">
                            <div className="relative h-96 md:h-full">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="md:w-1/2 p-8">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                {product.name}
                            </h1>

                            <div className="flex items-center mb-6">
                                <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400" />
                                <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                                    {product.price}
                                </span>
                            </div>

                            <div className="prose dark:prose-invert mb-8">
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {product.createdAt && (
                                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-8">
                                    <Calendar className="h-5 w-5 mr-2" />
                                    <span>Added on {new Date(product.createdAt).toLocaleDateString()}</span>
                                </div>
                            )}

                            <div className="space-y-4">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-colors">
                                    Add to Cart
                                </button>
                                <button className="w-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 py-3 px-6 rounded-lg text-lg font-semibold transition-colors">
                                    Add to Wishlist
                                </button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                    Product Features
                                </h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                    <li>• High-quality materials</li>
                                    <li>• Fast shipping available</li>
                                    <li>• 30-day return policy</li>
                                    <li>• Customer support included</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}