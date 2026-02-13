
import React from 'react';
import { Product, Category, MarketStat, CompetitorData } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Elite Pro Jersey',
    category: Category.PERFORMANCE,
    price: 4500,
    description: 'Ultra-breathable 4-way stretch performance jersey engineered for high-intensity play.',
    features: ['Moisture-wicking fabric', '4-way stretch', 'Anti-odor technology'],
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800',
    tags: ['New Drop', 'Performance']
  },
  {
    id: 'p7',
    name: 'Velocity Court Shoes',
    category: Category.PERFORMANCE,
    price: 12500,
    description: 'Advanced cushioning and ankle support for explosive movement on the hardwood.',
    features: ['Responsive foam', 'Multi-directional grip', 'Reinforced heel'],
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=800',
    tags: ['Footwear', 'Elite']
  },
  {
    id: 'p6',
    name: 'Aero-Lift Sports Bra',
    category: Category.PERFORMANCE,
    price: 3200,
    description: 'High-impact support with compression fit and moisture-wicking technology.',
    features: ['High-impact support', 'Racerback design', 'Breathable under-band'],
    imageUrl: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800',
    tags: ['Women', 'Performance']
  },
  {
    id: 'p5',
    name: 'Hoop Script Tee',
    category: Category.STREETWEAR,
    price: 3200,
    description: 'Classic heavyweight tee with minimalist graphic elements on the chest and back.',
    features: ['100% Cotton', 'Boxy Fit', 'High-density Print'],
    imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
    tags: ['Streetwear', 'Graphic']
  },
  {
    id: 'p2',
    name: 'Court-Line Shorts',
    category: Category.PERFORMANCE,
    price: 3800,
    description: 'Lightweight mesh panels with a secure elastic waistband and deep pockets.',
    features: ['Lightweight breathable mesh', 'Internal drawcord', 'Double-stitched seams'],
    imageUrl: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800',
    tags: ['Performance', 'Essential']
  },
  {
    id: 'p3',
    name: 'Vertical Logo Hoodie',
    category: Category.STREETWEAR,
    price: 7500,
    description: 'Heavyweight 320 GSM cotton fleece with our signature vertical HOOP wordmark.',
    features: ['320 GSM Cotton', 'Oversized Fit', 'Reinforced Cuffs'],
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    tags: ['Limited Drop', 'Streetwear']
  }
];

export const MARKET_STATS: MarketStat[] = [
  { label: 'Market Size', value: '$400B+', description: 'Global sportswear industry value.' },
  { label: 'Growth', value: '7.2%', description: 'CAGR of performance apparel sector.' },
  { label: 'Reach', value: '1B+', description: 'Basketball fans globally across social platforms.' }
];

export const COMPETITORS: CompetitorData[] = [
  { name: 'Nike', strength: 'Performance innovation', gap: 'Mass-market positioning', opportunity: 'Niche focus' },
  { name: 'Adidas', strength: 'Global reach', gap: 'Less basketball-centric', opportunity: 'Culture-first' },
  { name: 'Under Armour', strength: 'Performance gear', gap: 'Weaker streetwear appeal', opportunity: 'Style bridge' }
];

export const VALUES = [
  { title: 'Performance', desc: 'Cutting-edge fabrics for the modern athlete.' },
  { title: 'Culture', desc: 'Inspired by the streets and the hardwood.' },
  { title: 'Authenticity', desc: 'Real gear for real players.' },
  { title: 'Community', desc: 'Building a global squad through HOOP.' }
];
