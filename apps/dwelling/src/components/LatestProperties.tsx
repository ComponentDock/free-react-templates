import { Heart, MapPin, BedDouble, Bath } from 'lucide-react'

interface Property {
  id: number
  name: string
  agent: string
  address: string
  price: string
  beds: number
  baths: number
  image: string
  label?: string
}

const properties: Property[] = [
  {
    id: 1,
    name: 'Home in Merrick Way',
    agent: 'Ashton Kutcher',
    address: '3 Middle Winchendon Rd, Rindge, NH',
    price: '$ 1,200/month',
    beds: 3,
    baths: 2,
    image: 'https://picsum.photos/seed/dwelling-prop-1/400/300',
    label: 'For Rent',
  },
  {
    id: 2,
    name: 'Unimont Aurum',
    agent: 'Ashton Kutcher',
    address: 'Gut No.102, Opp. HP Petrol Pump, Karjat',
    price: '$ 2,500/month',
    beds: 4,
    baths: 3,
    image: 'https://picsum.photos/seed/dwelling-prop-2/400/300',
  },
  {
    id: 3,
    name: 'Vrindavan Flora',
    agent: 'Ashton Kutcher',
    address: 'No. 15, 16, 17-1A Rasayani',
    price: '$ 1,800/month',
    beds: 2,
    baths: 2,
    image: 'https://picsum.photos/seed/dwelling-prop-3/400/300',
    label: 'Featured',
  },
  {
    id: 4,
    name: 'Shramik Vaibhav',
    agent: 'Ashton Kutcher',
    address: 'Sector 15, Navi Mumbai',
    price: '$ 950/month',
    beds: 2,
    baths: 1,
    image: 'https://picsum.photos/seed/dwelling-prop-4/400/300',
  },
  {
    id: 5,
    name: 'Poddar Wondercity',
    agent: 'Ashton Kutcher',
    address: 'Mumbai Pune Expressway',
    price: '$ 3,100/month',
    beds: 5,
    baths: 4,
    image: 'https://picsum.photos/seed/dwelling-prop-5/400/300',
  },
  {
    id: 6,
    name: 'GoldCrest Residency',
    agent: 'Ashton Kutcher',
    address: 'Andheri East, Mumbai',
    price: '$ 2,000/month',
    beds: 3,
    baths: 2,
    image: 'https://picsum.photos/seed/dwelling-prop-6/400/300',
  },
]

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {property.label && (
          <span
            className={`absolute left-3 top-3 rounded px-3 py-1 text-xs font-bold uppercase text-white ${
              property.label === 'For Rent' ? 'bg-brand' : 'bg-red-500'
            }`}
          >
            {property.label}
          </span>
        )}
        <button
          className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-text-muted transition-colors hover:bg-white hover:text-red-500"
          aria-label={`Save ${property.name}`}
        >
          <Heart size={16} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-lg font-bold text-text-dark">{property.name}</h3>
        <p className="mt-1 text-sm text-brand">{property.agent}</p>
        <p className="mt-1 flex items-center gap-1 text-xs text-text-muted">
          <MapPin size={12} />
          {property.address}
        </p>
        <div className="mt-3 flex items-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <BedDouble size={14} /> {property.beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <Bath size={14} /> {property.baths} Baths
          </span>
        </div>
        <div className="mt-3 border-t pt-3">
          <span className="font-heading text-lg font-bold text-navy">{property.price}</span>
        </div>
      </div>
    </div>
  )
}

export function LatestProperties() {
  return (
    <section id="properties" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-widest text-brand">
            Latest
          </h2>
          <h3 className="mt-2 font-heading text-3xl font-bold text-text-dark">Property</h3>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
