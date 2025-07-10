import React, { useState } from 'react'
import { Product } from '../types'

interface ProductCardProps {
  product: Product
  onAddToCart: (productId: number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const renderRating = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-color-secondary">
          ⭐
        </span>
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-color-secondary">
          ⭐
        </span>
      )
    }

    return (
      <div className="flex items-center gap-1">
        {stars}
        <span className="text-sm text-text-secondary ml-1">
          ({rating.toFixed(1)})
        </span>
      </div>
    )
  }

  return (
    <article className="bg-bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-square bg-bg-tertiary">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse bg-bg-primary rounded w-16 h-16"></div>
          </div>
        )}
        {!imageError && (
          <img
            src={product.thumbnail}
            alt={product.title}
            className={`w-full h-full object-cover transition-opacity ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
            onLoad={() => setImageLoading(false)}
            onError={() => {
              setImageLoading(false)
              setImageError(true)
            }}
          />
        )}
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center text-text-muted">
            <span>Imagen no disponible</span>
          </div>
        )}
        {product.discountPercentage > 0 && (
          <div className="absolute top-2 right-2 bg-color-danger text-white text-xs px-2 py-1 rounded-full font-medium">
            -{product.discountPercentage.toFixed(0)}%
          </div>
        )}
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-text-primary line-clamp-2 mb-1">
            {product.title}
          </h3>
          <p className="text-sm text-text-secondary line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-text-primary">
            {formatPrice(product.price)}
          </div>
          {renderRating(product.rating)}
        </div>

        <div className="flex items-center justify-between text-sm text-text-secondary">
          <span>Marca: {product.brand}</span>
          <span>Stock: {product.stock}</span>
        </div>

        <button
          onClick={() => onAddToCart(product.id)}
          className="w-full btn btn-primary"
          disabled={product.stock === 0}
        >
          <span>🛒</span>
          {product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard 