import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/app/lib/auth'
import { getProducts, createProduct } from '@/app/lib/db'

export async function GET() {
    try {
        const products = await getProducts()
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        )
    }
}

export async function POST(request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            )
        }

        const body = await request.json()
        const { name, description, price, image } = body

        if (!name || !description || !price) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        const product = await createProduct({
            name,
            description,
            price,
            image: image || 'https://via.placeholder.com/500x300'
        })

        return NextResponse.json(product, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to create product' },
            { status: 500 }
        )
    }
}