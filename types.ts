export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  reviews: number;
  features: string[];
  description: string;
  imageUrl: string;
  affiliateLink: string;
  specs: {
    screen?: string;
    processor?: string;
    battery?: string;
    camera?: string;
    storage?: string;
  };
}

export enum Sender {
  USER = 'user',
  BOT = 'model',
  SYSTEM = 'system'
}

export interface Message {
  id: string;
  role: Sender;
  text: string;
  isThinking?: boolean;
  relatedProducts?: Product[];
  usedFilters?: SearchFilters;
}

export interface SearchFilters {
  minPrice?: number;
  maxPrice?: number;
  brand?: string;
  features?: string[];
  minRating?: number;
}