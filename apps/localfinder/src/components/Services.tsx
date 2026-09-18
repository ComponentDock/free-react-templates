import { useState } from 'react'
import { Star, MapPin } from 'lucide-react'

interface Listing {
  title: string
  location: string
  rating: number
  image: string
}

const listingsByTab: Record<string, Listing[]> = {
  Restaurant: [
    {
      title: 'The Golden Fork',
      location: 'New York',
      rating: 4.8,
      image: 'https://picsum.photos/seed/lf-rest1/300/200',
    },
    {
      title: 'Spice Garden',
      location: 'Los Angeles',
      rating: 4.6,
      image: 'https://picsum.photos/seed/lf-rest2/300/200',
    },
    {
      title: 'Bella Cucina',
      location: 'Chicago',
      rating: 4.9,
      image: 'https://picsum.photos/seed/lf-rest3/300/200',
    },
    {
      title: 'Ocean Breeze',
      location: 'Miami',
      rating: 4.5,
      image: 'https://picsum.photos/seed/lf-rest4/300/200',
    },
  ],
  Shopping: [
    {
      title: 'Urban Outfitters',
      location: 'New York',
      rating: 4.7,
      image: 'https://picsum.photos/seed/lf-shop1/300/200',
    },
    {
      title: 'Trendy Mall',
      location: 'Los Angeles',
      rating: 4.4,
      image: 'https://picsum.photos/seed/lf-shop2/300/200',
    },
    {
      title: 'Style Hub',
      location: 'Chicago',
      rating: 4.8,
      image: 'https://picsum.photos/seed/lf-shop3/300/200',
    },
    {
      title: 'Fashion Point',
      location: 'Miami',
      rating: 4.3,
      image: 'https://picsum.photos/seed/lf-shop4/300/200',
    },
  ],
  Travel: [
    {
      title: 'Wanderlust Tours',
      location: 'New York',
      rating: 4.9,
      image: 'https://picsum.photos/seed/lf-trav1/300/200',
    },
    {
      title: 'SkyHigh Adventures',
      location: 'Los Angeles',
      rating: 4.7,
      image: 'https://picsum.photos/seed/lf-trav2/300/200',
    },
    {
      title: 'Pathfinder Expeditions',
      location: 'Chicago',
      rating: 4.6,
      image: 'https://picsum.photos/seed/lf-trav3/300/200',
    },
    {
      title: 'Sunset Voyages',
      location: 'Miami',
      rating: 4.8,
      image: 'https://picsum.photos/seed/lf-trav4/300/200',
    },
  ],
  Beauty: [
    {
      title: 'Glow Studio',
      location: 'New York',
      rating: 4.8,
      image: 'https://picsum.photos/seed/lf-beau1/300/200',
    },
    {
      title: 'Serenity Spa',
      location: 'Los Angeles',
      rating: 4.9,
      image: 'https://picsum.photos/seed/lf-beau2/300/200',
    },
    {
      title: 'Beauty Bliss',
      location: 'Chicago',
      rating: 4.5,
      image: 'https://picsum.photos/seed/lf-beau3/300/200',
    },
    {
      title: 'The Nail Bar',
      location: 'Miami',
      rating: 4.6,
      image: 'https://picsum.photos/seed/lf-beau4/300/200',
    },
  ],
}

const tabs = ['Restaurant', 'Shopping', 'Travel', 'Beauty'] as const

export type TabName = (typeof tabs)[number]

export function Services({ initialTab = 'Restaurant' as TabName }: { initialTab?: TabName } = {}) {
  const [activeTab, setActiveTab] = useState<TabName>(initialTab)
  const listings = listingsByTab[activeTab]!

  return (
    <section className="py-16 bg-page">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-ink mb-3">The Most Searched Services</h2>
        <p className="text-muted text-sm mb-10">
          Discover amazing places and services in your neighborhood
        </p>

        {/* Tab bar */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-primary text-white'
                  : 'bg-white text-muted border border-line hover:text-ink'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Listings grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {listings.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-ink font-semibold text-sm mb-1">{item.title}</h3>
                <div className="flex items-center gap-1 text-muted text-xs mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-ink text-xs font-semibold">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
