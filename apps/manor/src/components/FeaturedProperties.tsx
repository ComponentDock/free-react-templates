import { Bed, Bath, Maximize, Home, Car } from 'lucide-react'

interface Property {
  title: string
  description: string
  bedrooms: number
  bathrooms: number
  area: string
  patio: number
  garage: number
  tags: string[]
  price: string
  image: string
}

const PROPERTIES: Property[] = [
  {
    title: 'House in West California',
    description:
      'Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.',
    bedrooms: 4,
    bathrooms: 3,
    area: '7100 Sq Ft',
    patio: 1,
    garage: 2,
    tags: ['Hottub', 'Swimming Pool', 'Garden', 'Patio', 'Hard Wood Floor'],
    price: '$540,000',
    image: 'https://picsum.photos/seed/manor-prop1/400/300',
  },
  {
    title: 'Villa in Miami Beach',
    description:
      'Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.',
    bedrooms: 3,
    bathrooms: 2,
    area: '5200 Sq Ft',
    patio: 1,
    garage: 1,
    tags: ['Swimming Pool', 'Garden', 'Patio', 'Balcony'],
    price: '$380,000',
    image: 'https://picsum.photos/seed/manor-prop2/400/300',
  },
  {
    title: 'Penthouse in Dublin',
    description:
      'Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.',
    bedrooms: 2,
    bathrooms: 2,
    area: '3400 Sq Ft',
    patio: 0,
    garage: 1,
    tags: ['Hard Wood Floor', 'Central AC', 'Fireplace'],
    price: '$290,000',
    image: 'https://picsum.photos/seed/manor-prop3/400/300',
  },
]

const ROOM_ICONS = [
  { icon: Bed, label: 'Bedrooms' },
  { icon: Bath, label: 'Bathrooms' },
  { icon: Maximize, label: 'Area' },
  { icon: Home, label: 'Patio' },
  { icon: Car, label: 'Garage' },
]

function PropertyCard({ property }: { property: Property }) {
  const values = [
    property.bedrooms,
    property.bathrooms,
    property.area,
    property.patio,
    property.garage,
  ]

  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="h-52 w-full object-cover"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded bg-coral-400 px-3 py-1 text-xs font-semibold text-white">
          featured
        </span>
      </div>

      <div className="p-5">
        <h3 className="mb-2 font-heading text-lg font-semibold text-navy-800">{property.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-500">{property.description}</p>

        <div className="mb-4 grid grid-cols-5 gap-2">
          {ROOM_ICONS.map(({ icon: Icon, label }, i) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-1 h-5 w-5 text-coral-400" />
              <span className="block text-xs text-gray-500">{label}</span>
              <span className="block text-sm font-semibold text-navy-800">{values[i]}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1">
          {property.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-gray-100 px-5 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-coral-400">
          <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <div>
          <span className="block text-xs text-gray-500">For Sale</span>
          <span className="font-heading text-lg font-bold text-navy-800">{property.price}</span>
        </div>
      </div>
    </div>
  )
}

export function FeaturedProperties() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-800">featured properties</h2>
          <span className="text-sm text-gray-500">See our best offers</span>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROPERTIES.map((prop) => (
            <PropertyCard key={prop.title} property={prop} />
          ))}
        </div>
      </div>
    </section>
  )
}
