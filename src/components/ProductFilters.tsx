import React, { useState, useEffect } from 'react'
import { ProductFilters as ProductFiltersType } from '../types'

interface ProductFiltersProps {
  filters: ProductFiltersType
  categories: string[]
  onFiltersChange: (filters: ProductFiltersType) => void
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  categories,
  onFiltersChange
}) => {
  const [searchTerm, setSearchTerm] = useState(filters.search)

  // Debounce para la búsqueda
  useEffect(() => {
    const timer = setTimeout(() => {
      onFiltersChange({ ...filters, search: searchTerm })
    }, 300)

    return () => clearTimeout(timer)
  }, [searchTerm, filters, onFiltersChange])

  const handleCategoryChange = (category: string) => {
    onFiltersChange({ ...filters, category })
  }

  const handleSortChange = (sortBy: ProductFiltersType['sortBy']) => {
    onFiltersChange({ ...filters, sortBy })
  }

  return (
    <div className="bg-bg-secondary p-4 rounded-lg space-y-4">
      <h2 className="text-lg font-semibold text-text-primary">Filtros</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Búsqueda */}
        <div>
          <label htmlFor="search" className="block text-sm font-medium text-text-secondary mb-2">
            Buscar
          </label>
          <input
            id="search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full px-3 py-2 border border-border-color rounded-md bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-color-primary focus:border-transparent"
          />
        </div>

        {/* Categoría */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-text-secondary mb-2">
            Categoría
          </label>
          <select
            id="category"
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-border-color rounded-md bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-color-primary focus:border-transparent"
          >
            <option value="">Todas las categorías</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Ordenamiento */}
        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-text-secondary mb-2">
            Ordenar por
          </label>
          <select
            id="sort"
            value={filters.sortBy}
            onChange={(e) => handleSortChange(e.target.value as ProductFiltersType['sortBy'])}
            className="w-full px-3 py-2 border border-border-color rounded-md bg-bg-primary text-text-primary focus:outline-none focus:ring-2 focus:ring-color-primary focus:border-transparent"
          >
            <option value="name">Nombre</option>
            <option value="price-asc">Precio: Menor a Mayor</option>
            <option value="price-desc">Precio: Mayor a Menor</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default ProductFilters 