import { ProductCard } from '@/app/components/ProductCard'
import { getProducts } from '@/app/lib/db'

export default async function ProductsPage() {
    const products = await getProducts()

    return (
        <div className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Products
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Discover our complete collection of amazing products
                    </p>
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No products found. Check back soon!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}