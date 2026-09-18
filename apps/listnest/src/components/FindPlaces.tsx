import { cn } from '@free-react-templates/ui'

interface FindPlacesProps {
  className?: string
}

interface Place {
  name: string
  count: number
  image: string
}

const places: Place[] = [
  { name: 'Nightlife', count: 385, image: 'https://picsum.photos/seed/listnest-nightlife/600/400' },
  {
    name: 'Restaurants',
    count: 210,
    image: 'https://picsum.photos/seed/listnest-restaurants/600/400',
  },
  { name: 'Outdoors', count: 114, image: 'https://picsum.photos/seed/listnest-outdoors/600/400' },
  { name: 'Hotels', count: 577, image: 'https://picsum.photos/seed/listnest-hotels/600/400' },
  { name: 'Shopping', count: 432, image: 'https://picsum.photos/seed/listnest-shopping/600/400' },
]

export function FindPlaces({ className }: FindPlacesProps) {
  const tallCard = places[0]!
  const smallCards = places.slice(1)

  return (
    <section className={cn('py-[90px] max-md:py-[45px]', className)}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-heading text-[35px] max-lg:text-[30px] relative inline-block pb-[23px] after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[3px] after:bg-primary">
            What do you need to find?
          </h3>
        </div>

        {/* Grid: 1 tall left + 2x2 right */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left column - tall card */}
          <div className="relative overflow-hidden group cursor-pointer h-[380px]">
            <img
              src={tallCard.image}
              alt={tallCard.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
              <h5 className="text-[28px] font-light">{tallCard.name}</h5>
              <p className="mt-1 text-sm">{tallCard.count} Listings</p>
            </div>
          </div>

          {/* Right column - 2x2 grid */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {smallCards.map((place) => (
              <div
                key={place.name}
                className="relative overflow-hidden group cursor-pointer h-[180px]"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <h5 className="text-[28px] font-light">{place.name}</h5>
                  <p className="mt-1 text-sm">{place.count} Listings</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
