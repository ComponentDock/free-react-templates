import { ChevronRight } from 'lucide-react'

const categories = [
  { name: 'Programming', imageSeed: 'scholar-cat1' },
  { name: 'VFX', imageSeed: 'scholar-cat2' },
  { name: 'App Development', imageSeed: 'scholar-cat3' },
  { name: 'Technology', imageSeed: 'scholar-cat4' },
  { name: 'Graphics Design', imageSeed: 'scholar-cat5' },
  { name: 'Music', imageSeed: 'scholar-cat6' },
  { name: 'Product Design', imageSeed: 'scholar-cat7' },
  { name: 'Video Editing', imageSeed: 'scholar-cat8' },
]

export function Categories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="text-center font-display text-2xl font-bold text-heading sm:text-3xl">
          Explore top categories
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div key={cat.name} className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/${cat.imageSeed}/400/250`}
                alt={cat.name}
                className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                width={400}
                height={250}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-base font-semibold text-white">{cat.name}</h3>
                  <a
                    href={`#category-${cat.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm font-medium text-white/80 hover:text-white"
                  >
                    View Courses <ChevronRight className="inline h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
