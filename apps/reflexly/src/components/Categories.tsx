import { Button } from '@free-react-templates/ui'

const categories = [
  { name: 'Animal', count: 120, image: 'https://picsum.photos/seed/reflexly-cat-1/400/300' },
  { name: 'Natural', count: 325, image: 'https://picsum.photos/seed/reflexly-cat-2/400/300' },
  { name: 'Portrait', count: 540, image: 'https://picsum.photos/seed/reflexly-cat-3/400/300' },
  { name: 'Landscape', count: 280, image: 'https://picsum.photos/seed/reflexly-cat-4/400/300' },
  { name: 'Wildlife', count: 195, image: 'https://picsum.photos/seed/reflexly-cat-5/400/300' },
]

export function Categories() {
  return (
    <section className="bg-bg-light py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="mb-3 font-heading text-3xl font-bold uppercase tracking-wider text-text-primary md:text-4xl">
              Categories
            </h2>
            <div className="h-1 w-16 bg-brand" />
          </div>
          <Button className="rounded-btn hidden bg-brand px-6 py-2 font-heading text-sm uppercase tracking-wider text-white hover:bg-brand-hover sm:inline-flex">
            View all
          </Button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {categories.map((cat) => (
            <article
              key={cat.name}
              className="group relative min-w-[250px] flex-shrink-0 overflow-hidden"
            >
              <img
                src={cat.image}
                alt={`${cat.name} photography category`}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-overlay transition-colors duration-300 group-hover:bg-overlay-hover">
                <h3 className="mb-1 font-heading text-xl font-bold uppercase tracking-wider text-white">
                  {cat.name}
                </h3>
                <p className="text-sm text-white/80">{cat.count} pictures</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Button className="rounded-btn bg-brand px-6 py-2 font-heading text-sm uppercase tracking-wider text-white hover:bg-brand-hover">
            View all
          </Button>
        </div>
      </div>
    </section>
  )
}
