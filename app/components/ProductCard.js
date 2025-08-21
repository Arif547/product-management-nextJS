import Link from 'next/link'
import Image from 'next/image'
import { Eye } from 'lucide-react'

export function ProductCard({ product }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        ${product.price}
                    </span>
                    <Link
                        href={`/products/${product.id}`}
                        className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                    >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}