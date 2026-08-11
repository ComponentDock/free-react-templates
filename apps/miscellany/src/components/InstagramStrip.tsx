import { Plus } from 'lucide-react'
import {
  instagramHeading,
  instagramSectionLabel,
  instagramTileLabel,
  instagramTiles,
} from '../data'

const picsum = (seed: string, width: number, height: number) =>
  `https://picsum.photos/seed/${seed}/${width}/${height}`

export function InstagramStrip() {
  return (
    <section aria-label={instagramSectionLabel} className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-base font-bold uppercase tracking-[2px] text-heading dark:text-white">
          {instagramHeading}
        </h2>
        <div className="flex flex-wrap">
          {instagramTiles.map((seed, index) => (
            <a
              key={seed}
              href="#"
              aria-label={instagramTileLabel(index)}
              className="group relative block w-[12.5%] overflow-hidden"
            >
              <img
                src={picsum(seed, 300, 300)}
                alt=""
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition-opacity duration-300 group-hover:bg-black/30 group-hover:opacity-100"
              >
                <Plus className="h-10 w-10" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
