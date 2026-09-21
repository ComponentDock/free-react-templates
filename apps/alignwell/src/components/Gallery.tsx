import { Expand } from 'lucide-react'

const works = [
  { title: 'Foot Pain', image: 'https://picsum.photos/seed/alignwell-work1/600/400' },
  { title: 'Arm Pain', image: 'https://picsum.photos/seed/alignwell-work2/600/400' },
  { title: 'Shoulder Pain', image: 'https://picsum.photos/seed/alignwell-work3/600/400' },
  { title: 'Back Pain', image: 'https://picsum.photos/seed/alignwell-work4/600/400' },
  { title: 'Head & Migraines', image: 'https://picsum.photos/seed/alignwell-work5/600/400' },
  { title: 'Wear & Tear', image: 'https://picsum.photos/seed/alignwell-work6/600/400' },
  { title: 'Joint Pain', image: 'https://picsum.photos/seed/alignwell-work7/600/400' },
  { title: 'Lower Back Pain', image: 'https://picsum.photos/seed/alignwell-work8/600/400' },
] as const

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink dark:text-white">Conditions We Treat</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {works.map((w) => (
            <div key={w.title} className="group relative overflow-hidden rounded-xl">
              <img
                src={w.image}
                alt={w.title}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-sm font-bold text-white">{w.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
