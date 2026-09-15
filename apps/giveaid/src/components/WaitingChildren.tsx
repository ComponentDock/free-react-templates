import { ArrowRight } from 'lucide-react'

const children = [
  { name: 'Edward', age: 14, image: 'https://picsum.photos/seed/giveaid-child1/400/500' },
  { name: 'Mellisa', age: 6, image: 'https://picsum.photos/seed/giveaid-child2/400/500' },
  { name: 'Mark', age: 12, image: 'https://picsum.photos/seed/giveaid-child3/400/500' },
  { name: 'Jessa', age: 13, image: 'https://picsum.photos/seed/giveaid-child4/400/500' },
  { name: 'Ben', age: 14, image: 'https://picsum.photos/seed/giveaid-child5/400/500' },
]

export function WaitingChildren() {
  return (
    <section id="children" className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase tracking-wider text-ink">
            Waiting Children
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-text-gray">
            These wonderful children are waiting for a loving family. Each one has a unique
            personality and dreams for the future.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-hover"
          >
            Find More Waiting Children <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {children.map((child) => (
            <div key={child.name} className="group cursor-pointer">
              <div className="overflow-hidden rounded">
                <img
                  src={child.image}
                  alt={`${child.name}, age ${child.age}`}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {child.name}, <span className="text-text-gray">{child.age} yrs. old</span>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
