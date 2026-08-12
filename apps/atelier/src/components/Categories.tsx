import { cn } from '@free-react-templates/ui'
import { CATEGORIES } from '../data'

/* categories — one large "Women's fashion" tile (spans two rows on wide
   screens) + a 2x2 grid of smaller tiles, each a photo with a SHOP NOW
   text link, mirroring the original's tile grid. */
export function Categories() {
  return (
    <section id="home" className="bg-white py-16 dark:bg-ink">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
        {CATEGORIES.map((category, index) => (
          <a
            key={category.name}
            href="#new-products"
            className={cn(
              'group relative block overflow-hidden rounded-lg',
              index === 0 && 'lg:row-span-2',
            )}
          >
            <img
              src={`https://picsum.photos/seed/${category.seed}/800/1000`}
              alt={category.name}
              loading="lazy"
              className="h-full min-h-[314px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6">
              {category.large ? (
                <h2 className="text-3xl font-semibold text-white">{category.name}</h2>
              ) : (
                <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              )}
              <span className="mt-2 inline-block border-b-2 border-brand pb-1 text-sm font-bold text-white uppercase">
                Shop Now
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
