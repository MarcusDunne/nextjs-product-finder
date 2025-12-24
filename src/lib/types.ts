export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image?: string;
  inStock: boolean;
  rating?: number;
  discount?: number;
}

export interface FilterOptions {
  category: string;
  minPrice: number;
  maxPrice: number;
  inStock: boolean;
  sortBy: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}
