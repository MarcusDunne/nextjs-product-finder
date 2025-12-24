import { Product, FilterOptions } from './types';

// Mock product data for demo purposes
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality noise-canceling headphones with 30-hour battery life',
    price: 149.99,
    originalPrice: 199.99,
    category: 'Electronics',
    inStock: true,
    rating: 4.5,
    discount: 25,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your workouts, heart rate, and sleep patterns',
    price: 299.99,
    category: 'Electronics',
    inStock: true,
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Yoga Mat Premium',
    description: 'Non-slip eco-friendly yoga mat with carrying strap',
    price: 39.99,
    originalPrice: 59.99,
    category: 'Sports',
    inStock: false,
    rating: 4.3,
    discount: 33,
  },
  {
    id: '4',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable everyday wear',
    price: 24.99,
    category: 'Clothing',
    inStock: true,
    rating: 4.6,
  },
  {
    id: '5',
    name: 'LED Desk Lamp',
    description: 'Adjustable brightness with USB charging port',
    price: 45.99,
    category: 'Home & Garden',
    inStock: true,
    rating: 4.4,
  },
  {
    id: '6',
    name: 'Programming Fundamentals',
    description: 'Comprehensive guide to modern software development',
    price: 34.99,
    category: 'Books',
    inStock: true,
    rating: 4.7,
  },
  {
    id: '7',
    name: 'Mechanical Gaming Keyboard',
    description: 'RGB backlit with customizable macros',
    price: 129.99,
    originalPrice: 179.99,
    category: 'Electronics',
    inStock: true,
    rating: 4.9,
    discount: 28,
  },
  {
    id: '8',
    name: 'Educational Robot Kit',
    description: 'Learn programming through hands-on robotics',
    price: 89.99,
    category: 'Toys',
    inStock: false,
    rating: 4.2,
  },
];

/**
 * Simulate API call to fetch products
 */
export async function fetchProducts(): Promise<Product[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  return mockProducts;
}

/**
 * Filter products based on search term and filter options
 */
export function filterProducts(
  products: Product[],
  searchTerm: string,
  filters: FilterOptions
): Product[] {
  let filtered = [...products];

  // Apply search filter
  if (searchTerm) {
    const term = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
  }

  // Apply category filter
  if (filters.category) {
    filtered = filtered.filter(
      (product) => product.category === filters.category
    );
  }

  // Apply price range filter
  filtered = filtered.filter(
    (product) =>
      product.price >= filters.minPrice && product.price <= filters.maxPrice
  );

  // Apply in-stock filter
  if (filters.inStock) {
    filtered = filtered.filter((product) => product.inStock);
  }

  // Apply sorting
  switch (filters.sortBy) {
    case 'name':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
  }

  return filtered;
}

/**
 * Get unique categories from products
 */
export function getCategories(products: Product[]): string[] {
  const categories = new Set(products.map((p) => p.category));
  return Array.from(categories).sort();
}

/**
 * Calculate price range from products
 */
export function getPriceRange(products: Product[]): {
  min: number;
  max: number;
} {
  if (products.length === 0) {
    return { min: 0, max: 0 };
  }

  const prices = products.map((p) => p.price);
  return {
    min: Math.floor(Math.min(...prices)),
    max: Math.ceil(Math.max(...prices)),
  };
}
