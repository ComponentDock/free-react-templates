import { Search } from 'lucide-react'

const photos = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/shutterphoto-${i + 1}/800/600`,
  alt: `Photo ${i + 1}`,
  category: ['Portrait', 'Landscape', 'Street', 'Nature', 'Architecture'][i % 5],
}))

export function PhotoGrid() {
  return (
    <section className="bg-black px-4 py-4" data-testid="photo-grid">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {photos.map((photo) => (
          <a
            key={photo.id}
            href={photo.src}
            target="_blank"
            rel="noreferrer"
            className="group relative block overflow-hidden"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading={photo.id > 3 ? 'lazy' : undefined}
              className="h-[200px] w-full object-cover transition-all duration-300 md:h-[300px]"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Search className="mb-2 h-5 w-5 text-white" />
              <span className="text-xs uppercase tracking-wider text-gray-300">
                {photo.category}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
