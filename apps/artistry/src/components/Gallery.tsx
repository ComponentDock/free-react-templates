import { GalleryItem } from './GalleryItem'

const works = [
  {
    image: 'https://picsum.photos/seed/artistry-work-1/600/400',
    category: 'Mobile App',
    title: 'Food Delivery App',
  },
  {
    image: 'https://picsum.photos/seed/artistry-work-2/600/400',
    category: 'Web Design',
    title: 'Corporate Website',
  },
  {
    image: 'https://picsum.photos/seed/artistry-work-3/600/400',
    category: 'Branding',
    title: 'Brand Identity',
  },
  {
    image: 'https://picsum.photos/seed/artistry-work-4/600/400',
    category: 'E-commerce',
    title: 'Online Store',
  },
] as const

export function Gallery() {
  return (
    <section id="works" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl">My Works</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {works.map((work) => (
            <GalleryItem
              key={work.title}
              image={work.image}
              category={work.category}
              title={work.title}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded-none border border-brand px-8 py-3 text-sm font-medium uppercase tracking-wider text-brand transition-colors hover:bg-brand hover:text-white"
          >
            More Works
          </a>
        </div>
      </div>
    </section>
  )
}
