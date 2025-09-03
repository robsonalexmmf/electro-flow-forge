export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  stock: number;
  description: string;
  brand: string;
  rating: number;
  reviews: number;
}

export interface Order {
  id: string;
  date: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: Array<{
    productId: string;
    productName: string;
    quantity: number;
    price: number;
  }>;
  customer: {
    name: string;
    email: string;
  };
  shippingAddress: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productsCount: number;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Notebook Gamer ASUS ROG Strix G15',
    price: 4599.99,
    originalPrice: 5299.99,
    image: '/placeholder.svg',
    category: 'notebooks',
    stock: 15,
    description: 'Notebook gamer com processador AMD Ryzen 7, 16GB RAM, RTX 3060',
    brand: 'ASUS',
    rating: 4.8,
    reviews: 234
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max 256GB',
    price: 8999.99,
    image: '/placeholder.svg',
    category: 'smartphones',
    stock: 8,
    description: 'iPhone 15 Pro Max com chip A17 Pro, sistema de câmera Pro',
    brand: 'Apple',
    rating: 4.9,
    reviews: 567
  },
  {
    id: '3',
    name: 'Monitor Gamer AOC 27" 144Hz',
    price: 1299.99,
    originalPrice: 1599.99,
    image: '/placeholder.svg',
    category: 'perifericos',
    stock: 23,
    description: 'Monitor gamer curvo 27" com 144Hz e 1ms de tempo de resposta',
    brand: 'AOC',
    rating: 4.7,
    reviews: 189
  },
  {
    id: '4',
    name: 'Placa de Vídeo RTX 4070 SUPER',
    price: 3299.99,
    image: '/placeholder.svg',
    category: 'componentes',
    stock: 5,
    description: 'Placa de vídeo NVIDIA GeForce RTX 4070 SUPER 12GB GDDR6X',
    brand: 'NVIDIA',
    rating: 4.9,
    reviews: 345
  },
  {
    id: '5',
    name: 'Teclado Mecânico HyperX Alloy',
    price: 299.99,
    originalPrice: 399.99,
    image: '/placeholder.svg',
    category: 'perifericos',
    stock: 45,
    description: 'Teclado mecânico com switches Cherry MX Red e iluminação RGB',
    brand: 'HyperX',
    rating: 4.6,
    reviews: 123
  }
];

export const mockOrders: Order[] = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    status: 'delivered',
    total: 4599.99,
    items: [
      {
        productId: '1',
        productName: 'Notebook Gamer ASUS ROG Strix G15',
        quantity: 1,
        price: 4599.99
      }
    ],
    customer: {
      name: 'João Silva',
      email: 'joao@email.com'
    },
    shippingAddress: 'Rua das Flores, 123 - São Paulo, SP'
  },
  {
    id: 'ORD-002',
    date: '2024-01-18',
    status: 'shipped',
    total: 8999.99,
    items: [
      {
        productId: '2',
        productName: 'iPhone 15 Pro Max 256GB',
        quantity: 1,
        price: 8999.99
      }
    ],
    customer: {
      name: 'Maria Santos',
      email: 'maria@email.com'
    },
    shippingAddress: 'Av. Paulista, 456 - São Paulo, SP'
  },
  {
    id: 'ORD-003',
    date: '2024-01-20',
    status: 'processing',
    total: 1599.98,
    items: [
      {
        productId: '3',
        productName: 'Monitor Gamer AOC 27" 144Hz',
        quantity: 1,
        price: 1299.99
      },
      {
        productId: '5',
        productName: 'Teclado Mecânico HyperX Alloy',
        quantity: 1,
        price: 299.99
      }
    ],
    customer: {
      name: 'Pedro Costa',
      email: 'pedro@email.com'
    },
    shippingAddress: 'Rua do Comércio, 789 - Rio de Janeiro, RJ'
  }
];

export const mockCategories: Category[] = [
  {
    id: '1',
    name: 'Notebooks',
    slug: 'notebooks',
    description: 'Notebooks para trabalho, estudo e games',
    productsCount: 45
  },
  {
    id: '2',
    name: 'Smartphones',
    slug: 'smartphones',
    description: 'Os melhores smartphones do mercado',
    productsCount: 67
  },
  {
    id: '3',
    name: 'Periféricos',
    slug: 'perifericos',
    description: 'Teclados, mouses, monitores e mais',
    productsCount: 123
  },
  {
    id: '4',
    name: 'Componentes',
    slug: 'componentes',
    description: 'Placas de vídeo, processadores e memórias',
    productsCount: 89
  },
  {
    id: '5',
    name: 'Games',
    slug: 'games',
    description: 'Consoles, jogos e acessórios',
    productsCount: 234
  }
];

export const mockSalesData = [
  { month: 'Jan', sales: 45000, orders: 234 },
  { month: 'Fev', sales: 52000, orders: 289 },
  { month: 'Mar', sales: 48000, orders: 267 },
  { month: 'Abr', sales: 61000, orders: 334 },
  { month: 'Mai', sales: 55000, orders: 298 },
  { month: 'Jun', sales: 67000, orders: 387 }
];

export const mockCustomerOrders: Order[] = [
  {
    id: 'ORD-101',
    date: '2024-01-10',
    status: 'delivered',
    total: 1299.99,
    items: [
      {
        productId: '3',
        productName: 'Monitor Gamer AOC 27" 144Hz',
        quantity: 1,
        price: 1299.99
      }
    ],
    customer: {
      name: 'Cliente Teste',
      email: 'cliente@teste.com'
    },
    shippingAddress: 'Rua Teste, 123 - São Paulo, SP'
  },
  {
    id: 'ORD-102',
    date: '2024-01-05',
    status: 'delivered',
    total: 599.98,
    items: [
      {
        productId: '5',
        productName: 'Teclado Mecânico HyperX Alloy',
        quantity: 2,
        price: 299.99
      }
    ],
    customer: {
      name: 'Cliente Teste',
      email: 'cliente@teste.com'
    },
    shippingAddress: 'Rua Teste, 123 - São Paulo, SP'
  }
];