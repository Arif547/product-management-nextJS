import { Hero } from './components/Hero'
import { ProductCard } from './components/ProductCard'
import { getProducts } from './lib/db'

async function getHighlightedProducts() {
  const products = await getProducts()
  return products.slice(0, 3) // Show first 3 products as highlights
}

export default async function Home() {
  const highlightedProducts = await getHighlightedProducts()

  return (
    <div>
      <Hero />

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Check out our most popular products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlightedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}