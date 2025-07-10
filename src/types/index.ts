// Tipos para el Dashboard Kanban
export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
  updatedAt: Date;
}

// Tipos para el Catálogo E-commerce
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

// Tipos para el tema (dark/light mode)
export type Theme = 'light' | 'dark';

// Tipos para filtros del catálogo
export interface ProductFilters {
  category: string;
  sortBy: 'price-asc' | 'price-desc' | 'rating' | 'name';
  search: string;
}

// Tipos para el carrito (callback del ProductCard)
export interface CartItem {
  productId: number;
  quantity: number;
} 