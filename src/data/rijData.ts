export interface Showroom {
  id: string;
  name: string;
  state: 'Tennessee' | 'Arkansas' | 'Mississippi';
  city: string;
  address: string;
  phone: string;
  hours: string;
  specialties: string[];
  image: string;
  director: string;
}

export interface VaultPiece {
  id: string;
  title: string;
  category: 'The 100 Facet Diamond' | 'Bridal Solitaire' | 'Custom Halo' | 'Anniversary Band' | 'Emerald & Sapphire Fine Gem';
  carat: string;
  metal: string;
  price: string;
  facets: number;
  image: string;
  badge?: string;
  details: string[];
}

export interface HeritageMilestone {
  year: string;
  title: string;
  description: string;
}

export const SHOWROOMS_DATA: Showroom[] = [
  {
    id: 'memphis-perkins',
    name: 'Memphis Perkins Flagship',
    state: 'Tennessee',
    city: 'Memphis',
    address: '376 Perkins Extended, Suite 100, Memphis, TN 38117',
    phone: '(901) 767-3397',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    specialties: ['Master Goldsmith Studio on Premises', 'The 100 Facet Diamond Vault', 'Private Bridal Champagne Suite', 'Complete Laser Repair Laboratory'],
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=800&q=80',
    director: 'Michael Irwin — Senior Master Jeweler'
  },
  {
    id: 'little-rock-cantrell',
    name: 'Little Rock Pleasant Ridge Salon',
    state: 'Arkansas',
    city: 'Little Rock',
    address: '11525 Cantrell Rd, Suite 703, Little Rock, AR 72212',
    phone: '(501) 224-0044',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    specialties: ['Custom 3D CAD Ring Workshop', 'Direct Diamond Sourcing Bar', 'Pre-Owned Fine Watch Exchange', 'Private Engagement Consultations'],
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80',
    director: 'Claire Henderson — Arkansas Bridal Director'
  },
  {
    id: 'north-little-rock',
    name: 'North Little Rock McCain Salon',
    state: 'Arkansas',
    city: 'North Little Rock',
    address: 'McCain Mall Promenade, North Little Rock, AR 72116',
    phone: '(501) 753-3397',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    specialties: ['Curated Engagement Showcase', 'Natural & Lab Diamond Comparison', 'Express Ring Sizing While You Wait', 'Anniversary Gifts Gallery'],
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    director: 'Amanda Ross — Certified Gemologist'
  },
  {
    id: 'bartlett-wolfchase',
    name: 'Bartlett Wolf Creek Showroom',
    state: 'Tennessee',
    city: 'Bartlett',
    address: '2838 Wolf Creek Pkwy, Bartlett, TN 38133',
    phone: '(901) 380-0040',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    specialties: ['Heirloom Remounting & Re-tipping', 'Family Crest Engraving', 'Groomsmen Watch & Band Selection', 'Local Artisan Goldsmithing'],
    image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=800&q=80',
    director: 'James Caldwell — Bench Goldsmith'
  },
  {
    id: 'southaven-airways',
    name: 'Southaven Airways Salon',
    state: 'Mississippi',
    city: 'Southaven',
    address: '6644 Airways Blvd, Southaven, MS 38671',
    phone: '(662) 349-3397',
    hours: 'Mon-Sat: 10:00 AM – 6:00 PM',
    specialties: ['North Mississippi Diamond Destination', 'Custom Bridal Concierge', 'Complimentary Sonic Ring Spa', 'Trade-In Evaluation'],
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
    director: 'Brandon Taylor — Senior Showroom Manager'
  }
];

export const VAULT_PIECES: VaultPiece[] = [
  {
    id: 'rij-100-facet-solitaire',
    title: 'The Signature 100 Facet Royal Solitaire',
    category: 'The 100 Facet Diamond',
    carat: '3.50 ct 100-Facet GIA Ideal',
    metal: '950 Solid Platinum',
    price: '$38,900',
    facets: 100,
    badge: 'Proprietary RIJ Cut',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
    details: ['100 Mathematically Cut Facets (42 More than Standard Diamonds)', 'Maximum White Light Dispersion & Zero Windowing', 'Four-Prong Wire Basket with Under-Gallery Diamonds', 'Lifetime Complimentary Ring Inspections']
  },
  {
    id: 'perkins-emerald-cathedral',
    title: 'The Mid-South Heritage Emerald-Cut Cathedral',
    category: 'Bridal Solitaire',
    carat: '4.10 ct Natural Diamond VVS1',
    metal: '18K Warm Yellow Gold & Platinum Head',
    price: '$44,500',
    facets: 57,
    badge: 'Perkins Flagship Edition',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    details: ['Flawless Step-Cut Geometric Mirror Reflections', 'Hand-Cast Cathedral Arch with Tapered Baguette Shoulders', 'GIA Inscription Number Laser-Etched on Girdle', 'Hand-Polished in Memphis Studio']
  },
  {
    id: 'french-pave-halo-100',
    title: 'The Pleasant Ridge 100-Facet French Pavé',
    category: 'Custom Halo',
    carat: '2.75 ct Center + 0.65ct Accent',
    metal: '18K White Gold',
    price: '$26,400',
    facets: 100,
    badge: 'Little Rock Exclusive',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80',
    details: ['Patented 100 Facet Round Center Diamond', 'Scalloped French Pavé Band for Seamless Light Edge', 'Low-Profile Comfort Curvature for Everyday Wear', 'Custom Sized by Hand in 24 Hours']
  },
  {
    id: 'anniversary-eternity-band',
    title: 'The 80th Anniversary Diamond Eternity Band',
    category: 'Anniversary Band',
    carat: '4.80 ct Total Weight',
    metal: '950 Solid Platinum',
    price: '$19,800',
    facets: 58,
    badge: '80-Year Milestone',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    details: ['Continuous Shared-Prong Eternity Setting', 'Calibrated D-F Colorless Diamonds', 'Special 1946–2026 Anniversary Commemorative Stamp', 'Includes Comprehensive GIA Appraisal']
  },
  {
    id: 'colombian-emerald-ring',
    title: 'The Mid-South Royal Colombian Emerald Ring',
    category: 'Emerald & Sapphire Fine Gem',
    carat: '3.90 ct Natural Colombian Emerald',
    metal: '18K Yellow Gold with Half-Moon Diamonds',
    price: '$32,000',
    facets: 57,
    badge: 'Rare Estate Vault',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
    details: ['Intense Vivid Green with Minor Cedarwood Clarity', 'Flanked by 0.90ct Matched Half-Moon Diamonds', 'Double-Prong Corner Protection Setting', 'Certified Origin Laboratory Report']
  },
  {
    id: 'oval-100-facet-custom',
    title: 'The Cantrell Elongated 100-Facet Oval',
    category: 'The 100 Facet Diamond',
    carat: '3.10 ct 100-Facet Oval Cut',
    metal: 'Platinum Head on 18K Rose Gold Band',
    price: '$31,500',
    facets: 100,
    badge: 'Bespoke Dual Metal',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    details: ['Proprietary Oval Faceting Eliminating Bowtie Shadow', 'Two-Tone Platinum Head & Warm Rose Gold Shank', 'Hidden Diamond Under-Halo for Side Sparkle', 'Designed for Maximum Finger Slenderness']
  }
];

export const HERITAGE_MILESTONES: HeritageMilestone[] = [
  {
    year: '1946',
    title: 'The First Jeweler Bench in Memphis',
    description: 'Robert Irwin opens a humble repair bench on South Main Street in Memphis, dedicating his craft to honesty, transparent pricing, and perfection in diamond setting.'
  },
  {
    year: '1974',
    title: 'The Perkins Extended Flagship',
    description: 'Expanding to East Memphis, Robert Irwin builds the flagship store on Perkins Extended, introducing dedicated gemological testing equipment and private diamond viewing rooms.'
  },
  {
    year: '1998',
    title: 'Cross-State Growth to Arkansas & Mississippi',
    description: 'To serve the wider Mid-South community, salons open in Little Rock (Pleasant Ridge) and Southaven, bringing in-house bench artisans closer to regional families.'
  },
  {
    year: '2012',
    title: 'Birth of "The 100 Facet Diamond"',
    description: 'Robert Irwin Jewelers patents the revolutionary 100 Facet Diamond cut. By adding 42 extra facets to the standard 58-facet brilliant, optical light refraction is increased by over 38%.'
  },
  {
    year: '2026',
    title: '80 Years of Heritage & 98% Recommendations',
    description: 'Celebrating eight decades as the Mid-South’s leading diamond family, boasting over 98% five-star customer satisfaction and thousands of custom bridal milestones.'
  }
];
