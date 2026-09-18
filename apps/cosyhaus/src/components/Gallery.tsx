import { ArrowRight } from 'lucide-react'

const galleryItems = [
  {
    title: 'Interior',
    subtitle: 'Modern Living Room',
    image: 'https://picsum.photos/seed/cosyhaus-g1/800/600',
    span: 'md:col-span-2',
  },
  {
    title: 'Interior',
    subtitle: 'Kitchen Design',
    image: 'https://picsum.photos/seed/cosyhaus-g2/400/400',
    span: '',
  },
  {
    title: 'Interior',
    subtitle: 'Bedroom Suite',
    image: 'https://picsum.photos/seed/cosyhaus-g3/400/400',
    span: '',
  },
  {
    title: 'Interior',
    subtitle: 'Office Space',
    image: 'https://picsum.photos/seed/cosyhaus-g4/400/400',
    span: '',
  },
  {
    title: 'Interior',
    subtitle: 'Bathroom',
    image: 'https://picsum.photos/seed/cosyhaus-g5/400/400',
    span: '',
  },
  {
    title: 'Interior',
    subtitle: 'Open Plan',
    image: 'https://picsum.photos/seed/cosyhaus-g6/800/600',
    span: 'md:col-span-2',
  },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="bg-white dark:bg-gray-950">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {galleryItems.map((item) => (
          <div key={item.subtitle} className={`group relative overflow-hidden ${item.span}`}>
            <img
              src={item.image}
              alt={item.subtitle}
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-80"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">
                  <span className="block text-xs font-normal text-white/70">{item.title}</span>
                  {item.subtitle}
                </h3>
                <a
                  href="#"
                  aria-label={`View ${item.subtitle}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-brand hover:bg-brand"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
