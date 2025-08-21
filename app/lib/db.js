// Mock database for demo purposes
let products = [
    {
        id: '1',
        name: 'MacBook Pro 16"',
        description: 'Powerful laptop with M2 Max chip, perfect for developers and creatives.',
        price: 2499,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=300&fit=crop',
        createdAt: new Date().toISOString()
    },
    {
        id: '2',
        name: 'iPhone 15 Pro',
        description: 'Latest iPhone with titanium design and advanced camera system.',
        price: 999,
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&h=300&fit=crop',
        createdAt: new Date().toISOString()
    },
    {
        id: '3',
        name: 'AirPods Pro 2',
        description: 'Premium wireless earbuds with active noise cancellation.',
        price: 249,
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=300&fit=crop',
        createdAt: new Date().toISOString()
    }
]

export const getProducts = async () => {
    return products
}

export const getProductById = async (id) => {
    return products.find(product => product.id === id)
}

export const createProduct = async (productData) => {
    const newProduct = {
        id: Date.now().toString(),
        ...productData,
        price: parseFloat(productData.price),
        createdAt: new Date().toISOString()
    }
    products.push(newProduct)
    return newProduct
}