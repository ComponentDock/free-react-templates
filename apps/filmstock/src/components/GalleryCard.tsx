import { cn } from '@free-react-templates/ui'
import { morePhotosLabel } from '../data'
import type { GalleryCategory } from '../data'

const picsum = (seed: string) => `https://picsum.photos/seed/${seed}/800/600`

export function GalleryCard({ category }: { category: GalleryCategory }) {
  return (
    <div className="group relative aspect-[4/3] cursor-pointer overflow-hidden">
      {/* Photo — grayscale by default, color on hover */}
      <img
        src={picsum(category.seed)}
        alt={`${category.name} photography`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 grayscale"
      />

      {/* Overlay — transparent by default, dark on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/40"
      />

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 transition-opacity duration-500 group-hover:opacity-100">
        <h2 className="text-2xl font-semibold uppercase tracking-wider text-white drop-shadow-lg">
          {category.name}
        </h2>
        <a
          href="#"
          className={cn(
            'mt-4 inline-block border-2 border-white px-6 py-2 text-[11px] font-medium uppercase tracking-[0.1em] text-white',
            'transition-all duration-300',
            'hover:bg-white hover:text-black',
          )}
        >
          {morePhotosLabel}
        </a>
      </div>
    </div>
  )
}
