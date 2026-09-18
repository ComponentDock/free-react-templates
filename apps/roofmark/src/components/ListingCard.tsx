import { Square, BedDouble, Bath, Car } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface ListingCardProps {
  image: string
  tags: string[]
  price: string
  location: string
  sqft: number
  beds: number
  baths: number
  garage: number
}

const tagColors: Record<string, string> = {
  house: 'bg-brand-green',
  'for sale': 'bg-brand-purple',
  'for rent': 'bg-brand-rent',
  villa: 'bg-brand-green',
  apartment: 'bg-brand-purple',
}

export function ListingCard({
  image,
  tags,
  price,
  location,
  sqft,
  beds,
  baths,
  garage,
}: ListingCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={location}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className={cn(
                'text-white text-xs font-semibold uppercase px-3 py-1 rounded',
                tagColors[tag.toLowerCase()] || 'bg-brand-purple',
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="absolute bottom-3 left-3 bg-brand-green text-white text-lg font-bold px-4 py-1.5 rounded">
          {price}
        </span>
      </div>
      <div className="p-5">
        <p className="text-brand-secondary text-sm mb-2">{location}</p>
        <div className="flex items-center gap-5 text-brand-muted text-sm">
          <span className="flex items-center gap-1.5">
            <Square size={16} className="text-brand-green" /> {sqft} sq ft
          </span>
          <span className="flex items-center gap-1.5">
            <BedDouble size={16} className="text-brand-green" /> {beds} Beds
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={16} className="text-brand-green" /> {baths} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Car size={16} className="text-brand-green" /> {garage} Garage
          </span>
        </div>
      </div>
    </div>
  )
}
