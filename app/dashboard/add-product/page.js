'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { LoadingSpinner } from '@/app/components/LoadingSpinner'
import { Package, DollarSign, FileText, Image as ImageIcon, Save } from 'lucide-react'
import toast from 'react-hot-toast'

export default function AddProductPage() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    })

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <LoadingSpinner size="lg" />
            </div>
        )
    }

    if (!session) {
        router.push('/login')
        return null
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error('Failed to create product')
            }

            const product = await response.json()
            toast.success('Product created successfully!')
            router.push(`/products/${product.id}`)
        } catch (error) {
            toast.error(error.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="py-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                    <div className="px-8 py-6 bg-blue-600 dark:bg-blue-800">
                        <h1 className="text-3xl font-bold text-white flex items-center">
                            <Package className="h-8 w-8 mr-3" />
                            Add New Product
                        </h1>
                        <p className="text-blue-100 mt-2">
                            Create a new product for your store
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Product Name *
                            </label>
                            <div className="relative">
                                <Package className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="Enter product name"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Description *
                            </label>
                            <div className="relative">
                                <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <textarea
                                    id="description"
                                    name="description"
                                    required
                                    rows={4}
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none"
                                    placeholder="Describe your product..."
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Price ($) *
                            </label>
                            <div className="relative">
                                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    required
                                    min="0"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Image URL (optional)
                            </label>
                            <div className="relative">
                                <ImageIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                Leave empty to use a placeholder image
                            </p>
                        </div>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <LoadingSpinner size="sm" />
                                ) : (
                                    <>
                                        <Save className="h-5 w-5 mr-2" />
                                        Create Product
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}