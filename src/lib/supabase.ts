// Mock data service to replace Supabase functionality

// Mock products data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Midnight Elegance',
    slug: 'midnight-elegance',
    description: 'A sophisticated evening fragrance with deep, mysterious notes that captivate and enchant.',
    short_description: 'Sophisticated evening fragrance',
    category_id: 'evening',
    scent_family_id: 'oriental',
    scent_notes: {
      top: ['Bergamot', 'Black Pepper'],
      middle: ['Rose', 'Jasmine', 'Patchouli'],
      base: ['Vanilla', 'Sandalwood', 'Musk']
    },
    base_price: 89.99,
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Ocean Breeze',
    slug: 'ocean-breeze',
    description: 'Fresh and invigorating scent reminiscent of a cool ocean breeze on a summer day.',
    short_description: 'Fresh aquatic fragrance',
    category_id: 'fresh',
    scent_family_id: 'aquatic',
    scent_notes: {
      top: ['Sea Salt', 'Citrus', 'Mint'],
      middle: ['Marine Notes', 'Lily of the Valley'],
      base: ['Driftwood', 'Ambergris']
    },
    base_price: 65.99,
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    name: 'Golden Sunset',
    slug: 'golden-sunset',
    description: 'Warm and radiant fragrance that captures the essence of a beautiful golden sunset.',
    short_description: 'Warm citrus fragrance',
    category_id: 'citrus',
    scent_family_id: 'citrus',
    scent_notes: {
      top: ['Orange Blossom', 'Mandarin'],
      middle: ['Neroli', 'Peach'],
      base: ['Amber', 'Cedar', 'White Musk']
    },
    base_price: 75.99,
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

// Mock Supabase-like API
export const supabase = {
  from: (table: string) => ({
    select: (_columns: string) => ({
      eq: (column: string, value: any) => ({
        limit: (limitCount: number) => {
          // Return a promise that resolves with mock data
          return Promise.resolve({
            data: table === 'products' && column === 'featured' && value === true
              ? mockProducts.filter(p => p.featured).slice(0, limitCount)
              : mockProducts.slice(0, limitCount)
          });
        }
      })
    }),
    insert: (_data: any[]) => {
      // Return a promise that resolves successfully
      return Promise.resolve({ error: null });
    }
  })
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  category_id: string;
  scent_family_id: string;
  scent_notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  base_price: number;
  featured: boolean;
  created_at: string;
  updated_at: string;
};

export type ProductVariant = {
  id: string;
  product_id: string;
  size: string;
  price: number;
  sku: string;
  stock_quantity: number;
  created_at: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
};

export type ScentFamily = {
  id: string;
  name: string;
  slug: string;
  description: string;
  created_at: string;
};

export type Review = {
  id: string;
  product_id: string;
  customer_id: string;
  rating: number;
  title: string;
  comment: string;
  verified_purchase: boolean;
  created_at: string;
};
