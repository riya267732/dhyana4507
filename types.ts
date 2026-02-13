
export enum Category {
  PERFORMANCE = 'Performance',
  STREETWEAR = 'Streetwear',
  ACCESSORIES = 'Accessories'
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
  tags: string[];
}

export interface MarketStat {
  label: string;
  value: string;
  description: string;
}

export interface CompetitorData {
  name: string;
  strength: string;
  gap: string;
  opportunity: string;
}
