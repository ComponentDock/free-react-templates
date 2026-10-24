import { cn } from '@free-react-templates/ui'
import { collections, photo, type Collection } from '../data'
import { SectionTitle } from './SectionTitle'

interface CategoryCardProps {
  collection: Collection
  /** The tall left tile of the collage (the two right tiles are short). */
  large?: boolean
}

function CategoryCard({ collection, large = false }: CategoryCardProps) {
  const width = large ? 800 : 600
  const height = large ? 900 : 400

  return (
    <a
      href="#popular"
      className={cn(
        'group relative block overflow-hidden bg-surface',
        large ? 'h-[420px] md:h-[560px]' : 'h-[260px]',
      )}
    >
      <span className="absolute top-0 left-0 z-10 bg-white px-[30px] py-[10px] text-base text-black transition-colors group-hover:bg-black group-hover:text-white">
        {collection.name}{' '}
        <span className="text-xs text-[#ced4da] group-hover:text-white/50">
          {collection.count} items
        </span>
      </span>
      <img
        src={photo(collection.seed, width, height)}
        alt={`${collection.name} collection photo`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top"
      />
    </a>
  )
}

/** "Discover / The Collections" collage: one tall category tile beside two
 *  stacked tiles, each with a white hover-to-black category pill. */
export function Collections() {
  const women = collections[0]!
  const men = collections[1]!
  const shoes = collections[2]!

  return (
    <section id="collections" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        <SectionTitle>
          <span className="block">Discover</span>
          The Collections
        </SectionTitle>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CategoryCard collection={women} large />
          </div>
          <div className="flex flex-col gap-4">
            <CategoryCard collection={men} />
            <CategoryCard collection={shoes} />
          </div>
        </div>
      </div>
    </section>
  )
}
