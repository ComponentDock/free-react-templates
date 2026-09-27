import { MapPin, Maximize, Bed, Bath, Car } from 'lucide-react'

const thumbnails = [
  'https://picsum.photos/seed/terravault-thumb-1/200/150',
  'https://picsum.photos/seed/terravault-thumb-2/200/150',
  'https://picsum.photos/seed/terravault-thumb-3/200/150',
]

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/terravault-hero-1/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-center px-4 lg:px-8">
        <div className="rounded-lg bg-white/95 p-8 text-center shadow-xl backdrop-blur-sm">
          <p className="flex items-center justify-center gap-2 text-sm text-gray-text">
            <MapPin size={16} className="text-[#2cbdb8]" />
            9721 Glen Creek Ave. Ballston Spa, NY
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold text-[#19191a] md:text-4xl">
            Villa 9721 Glen Creek
          </h1>
          <p className="mt-2 font-heading text-2xl font-bold text-[#2cbdb8]">$3,000,000</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-text">
            <span className="flex items-center gap-1">
              <Maximize size={16} className="text-[#2cbdb8]" />
              5201 Sqft
            </span>
            <span className="flex items-center gap-1">
              <Bed size={16} className="text-[#2cbdb8]" />8 Bed
            </span>
            <span className="flex items-center gap-1">
              <Bath size={16} className="text-[#2cbdb8]" />7 Bath
            </span>
            <span className="flex items-center gap-1">
              <Car size={16} className="text-[#2cbdb8]" />1 Garage
            </span>
          </div>
          <div className="mt-6 flex justify-center gap-3">
            {thumbnails.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Property thumbnail ${i + 1}`}
                className="h-20 w-28 rounded object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
