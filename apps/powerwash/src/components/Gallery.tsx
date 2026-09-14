import { Expand } from 'lucide-react'

const gallery = [
  {
    img: 'https://picsum.photos/seed/pw-gallery-1/600/400',
    category: 'Roof Cleaning',
    title: 'Residential Roof',
  },
  {
    img: 'https://picsum.photos/seed/pw-gallery-2/600/400',
    category: 'Driveway',
    title: 'Stone Driveway',
  },
  {
    img: 'https://picsum.photos/seed/pw-gallery-3/600/400',
    category: 'Gutter Cleaning',
    title: 'Commercial Gutters',
  },
  {
    img: 'https://picsum.photos/seed/pw-gallery-4/600/400',
    category: 'Patio Cleaning',
    title: 'Backyard Patio',
  },
  {
    img: 'https://picsum.photos/seed/pw-gallery-5/600/400',
    category: 'Building Cleaning',
    title: 'Office Complex',
  },
  {
    img: 'https://picsum.photos/seed/pw-gallery-6/600/400',
    category: 'Building Cleaning',
    title: 'Hallway',
  },
  {
    img: 'https://picsum.photos/seed/pw-gallery-7/600/400',
    category: 'Patio Cleaning',
    title: 'Garden Area',
  },
  {
    img: 'https://picsum.photos/seed/pw-gallery-8/600/400',
    category: 'Office',
    title: 'Office Entrance',
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gallery.map((g) => (
            <div
              key={g.title}
              className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden group cursor-pointer"
              style={{ backgroundImage: `url(${g.img})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-brand-500">
                  <Expand size={18} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform">
                <span className="text-xs uppercase tracking-wider opacity-80">{g.category}</span>
                <h3 className="font-bold text-lg">{g.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
