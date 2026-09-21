import { Search } from 'lucide-react'

const images = [
  { seed: 'piston-gal1', alt: 'Gallery image 1' },
  { seed: 'piston-gal2', alt: 'Gallery image 2' },
  { seed: 'piston-gal3', alt: 'Gallery image 3' },
  { seed: 'piston-gal4', alt: 'Gallery image 4' },
]

export function Gallery() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {images.map((img) => (
            <div key={img.seed} className="group relative overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/300`}
                alt={img.alt}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition group-hover:opacity-100">
                <Search className="text-white" size={28} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
