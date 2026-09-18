import { Play } from 'lucide-react'

interface CategoryCardProps {
  image: string
  title: string
  tag: string
}

function CategoryCard({ image, title, tag }: CategoryCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg">
      <div className="relative">
        <img src={image} alt={title} className="aspect-square w-full object-cover" loading="lazy" />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/90 text-white">
            <Play className="h-5 w-5 fill-white" />
          </div>
        </div>
        {/* Title overlay */}
        <h3 className="absolute bottom-10 left-4 right-4 text-sm font-medium text-white">
          {title}
        </h3>
      </div>
      {/* Tag below */}
      <div className="bg-white py-3 text-center">
        <span className="text-xs text-muted-alt">{tag}</span>
      </div>
    </article>
  )
}

const CATEGORY_EPISODES: CategoryCardProps[] = [
  {
    image: 'https://picsum.photos/seed/podlane-cat1/400/400',
    title: 'Cras malesuada ipsum sapien.',
    tag: 'travel',
  },
  {
    image: 'https://picsum.photos/seed/podlane-cat2/400/400',
    title: 'Cras malesuada ipsum sapien.',
    tag: 'lifestyle',
  },
  {
    image: 'https://picsum.photos/seed/podlane-cat3/400/400',
    title: 'Cras malesuada ipsum sapien.',
    tag: 'music',
  },
  {
    image: 'https://picsum.photos/seed/podlane-cat4/400/400',
    title: 'Cras malesuada ipsum sapien.',
    tag: 'travel',
  },
]

export function CategoryShows() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1140px] px-4">
        <h2 className="mb-12 text-3xl font-bold text-gray-900">By Category</h2>
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {CATEGORY_EPISODES.map((ep, i) => (
            <CategoryCard key={i} {...ep} />
          ))}
        </div>
        <div className="text-center">
          <a
            href="#"
            className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-brand-hover"
          >
            Browse Shows
          </a>
        </div>
      </div>
    </section>
  )
}
