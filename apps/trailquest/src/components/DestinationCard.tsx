import { Star, Clock, MapPin, ArrowRight } from 'lucide-react'

export interface DestinationCardProps {
  name: string
  image: string
  rating: number
  price: string
  description: string
  duration: string
  location: string
  reversed?: boolean
}

export function DestinationCard({
  name,
  image,
  rating,
  price,
  description,
  duration,
  location,
  reversed = false,
}: DestinationCardProps) {
  return (
    <div className={`flex flex-col gap-6 ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="group relative h-64 overflow-hidden rounded md:h-80 md:w-1/2">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/10" />
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowRight className="text-primary" size={18} />
        </div>
      </div>
      <div className="flex flex-col justify-center md:w-1/2">
        <h3 className="font-display text-2xl">{name}</h3>
        <div className="mt-2 flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              size={14}
              className={i < rating ? 'fill-accent-amber text-accent-amber' : 'text-gray-300'}
            />
          ))}
          <span className="ml-2 text-sm text-text-muted">({rating}/5)</span>
        </div>
        <p className="mt-3 text-text-muted">{description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm text-text-light">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {location}
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-semibold text-primary">{price}</span>
          <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark">
            Discover <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}
