import { MapPin, Droplets, BedDouble, Mountain, Umbrella } from 'lucide-react'

interface TourCard {
  title: string
  location: string
  price: string
  duration: string
  showers: number
  beds: number
  feature: string
  featureIcon: typeof Mountain
  seed: string
}

const tours: TourCard[] = [
  {
    title: 'Bali, Indonesia',
    location: 'Bali, Indonesia',
    price: '$300/person',
    duration: '8 Days Tour',
    showers: 2,
    beds: 3,
    feature: 'Near Mountain',
    featureIcon: Mountain,
    seed: 'getaway-t1',
  },
  {
    title: 'Bali, Indonesia',
    location: 'Bali, Indonesia',
    price: '$300/person',
    duration: '10 Days Tour',
    showers: 2,
    beds: 3,
    feature: 'Near Beach',
    featureIcon: Umbrella,
    seed: 'getaway-t2',
  },
  {
    title: 'Bali, Indonesia',
    location: 'Bali, Indonesia',
    price: '$300/person',
    duration: '7 Days Tour',
    showers: 2,
    beds: 3,
    feature: 'Near Beach',
    featureIcon: Umbrella,
    seed: 'getaway-t3',
  },
  {
    title: 'Bali, Indonesia',
    location: 'Bali, Indonesia',
    price: '$300/person',
    duration: '8 Days Tour',
    showers: 2,
    beds: 3,
    feature: 'Near Beach',
    featureIcon: Umbrella,
    seed: 'getaway-t4',
  },
  {
    title: 'Bali, Indonesia',
    location: 'Bali, Indonesia',
    price: '$300/person',
    duration: '10 Days Tour',
    showers: 2,
    beds: 3,
    feature: 'Near Beach',
    featureIcon: Umbrella,
    seed: 'getaway-t5',
  },
  {
    title: 'Bali, Indonesia',
    location: 'Bali, Indonesia',
    price: '$300/person',
    duration: '7 Days Tour',
    showers: 2,
    beds: 3,
    feature: 'Near Beach',
    featureIcon: Umbrella,
    seed: 'getaway-t6',
  },
]

function TourCard({
  title,
  location,
  price,
  duration,
  showers,
  beds,
  feature,
  featureIcon: FeatureIcon,
  seed,
}: TourCard) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg">
      <img
        src={`https://picsum.photos/seed/${seed}/400/250`}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <span className="rounded bg-sunset-700 px-2 py-0.5 text-xs font-semibold text-white">
            {price}
          </span>
          <span className="text-xs text-gray-500">{duration}</span>
        </div>
        <h3 className="mb-1 text-lg font-bold text-gray-900">{title}</h3>
        <p className="mb-3 flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="h-3 w-3" />
          {location}
        </p>
        <ul className="flex gap-4 border-t border-gray-100 pt-3 text-sm text-gray-600">
          <li className="flex items-center gap-1">
            <Droplets className="h-4 w-4 text-sunset-700" />
            {showers}
          </li>
          <li className="flex items-center gap-1">
            <BedDouble className="h-4 w-4 text-sunset-700" />
            {beds}
          </li>
          <li className="flex items-center gap-1">
            <FeatureIcon className="h-4 w-4 text-sunset-700" />
            {feature}
          </li>
        </ul>
      </div>
    </div>
  )
}

export function TourPackages() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Tour Destination
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {tours.map((tour, i) => (
            <TourCard key={i} {...tour} />
          ))}
        </div>
      </div>
    </section>
  )
}
