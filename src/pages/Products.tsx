import React, { useState, useEffect } from 'react'
import { Product, ProductFilters } from '../types'
import ProductFiltersComponent from '../components/ProductFilters'
import { fetchProducts } from '../services/productService'
import ProductCard from '@/components/ProductCard'

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<ProductFilters>({
    category: '',
    sortBy: 'name',
    search: ''
  })

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const data = await fetchProducts()
        setProducts(data.products)
        setFilteredProducts(data.products)
      } catch (err) {
        setError('Error al cargar los productos')
        console.error('Error loading products:', err)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  useEffect(() => {
    let result = [...products]

    // Filtro por búsqueda
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      result = result.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.brand.toLowerCase().includes(searchLower)
      )
    }

    // Filtro por categoría
    if (filters.category) {
      result = result.filter(product => product.category === filters.category)
    }

    // Ordenamiento
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'name':
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    setFilteredProducts(result)
  }, [products, filters])

  const handleAddToCart = (productId: number) => {
    console.log('Producto agregado al carrito:', productId)
    // Aquí se implementaría la lógica del carrito
  }

  const categories = Array.from(new Set(products.map(p => p.category)))

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-color-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-color-danger">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary mt-4"
        >
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-text-primary">Catálogo de Productos</h1>
        <div className="text-text-secondary">
          {filteredProducts.length} de {products.length} productos
        </div>
      </div>

      <ProductFiltersComponent
        filters={filters}
        categories={categories}
        onFiltersChange={setFilters}
      />

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">
            No se encontraron productos con los filtros aplicados
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Products 