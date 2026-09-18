import { MapPin, Bed, Bath, Car, Maximize } from 'lucide-react'
import { useState } from 'react'

const SLIDES = [
  {
    title: 'Taylor Plan, Orchard House',
    desc: 'A beautifully designed modern home nestled in a quiet neighborhood with stunning views.',
    image: 'https://picsum.photos/seed/hamlin-hero1/1600/900',
    category: 'House',
    location: 'Melbourne, Vic 3004, NC USA',
    area: '250 sqft',
    bedrooms: 3,
    bathrooms: 3,
    garage: 1,
  },
  {
    title: 'Rose Villa, USA',
    desc: 'Luxurious villa offering premium amenities and a serene living environment.',
    image: 'https://picsum.photos/seed/hamlin-hero2/1600/900',
    category: 'Villa',
    location: 'Sydney, NSW 2000, AU',
    area: '320 sqft',
    bedrooms: 4,
    bathrooms: 2,
    garage: 2,
  },
] as const

export function Hero() {
  const [current] = useState(0)
  const slide = SLIDES[current]!

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Text content — desktop */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left text */}
            <div className="md:w-1/2 text-white pt-20 md:pt-0">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
              <p className="text-white/80 text-lg max-w-md">{slide.desc}</p>
            </div>

            {/* Right property card */}
            <div className="md:w-[380px] bg-white p-6 rounded-lg shadow-xl">
              <span className="inline-block bg-brand text-white text-xs font-bold px-3 py-1 rounded mb-3">
                {slide.category}
              </span>
              <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
              <p className="text-text-secondary text-sm flex items-center gap-1 mb-4">
                <MapPin className="w-4 h-4" />
                {slide.location}
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm mb-4 border-t pt-4">
                <li className="flex items-center gap-2">
                  <Maximize className="w-4 h-4 text-brand" />
                  <span className="text-text-secondary">Area:</span> {slide.area}
                </li>
                <li className="flex items-center gap-2">
                  <Bed className="w-4 h-4 text-brand" />
                  <span className="text-text-secondary">Bedrooms:</span> {slide.bedrooms}
                </li>
                <li className="flex items-center gap-2">
                  <Bath className="w-4 h-4 text-brand" />
                  <span className="text-text-secondary">Bathrooms:</span> {slide.bathrooms}
                </li>
                <li className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-brand" />
                  <span className="text-text-secondary">Garage:</span> {slide.garage}
                </li>
              </ul>
              <a
                href="#"
                className="block w-full text-center border-2 border-dark text-dark font-bold py-3 hover:bg-dark hover:text-white transition-colors"
              >
                View Properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
