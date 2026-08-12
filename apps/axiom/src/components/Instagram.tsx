import { InstagramIcon } from './SocialIcons'

const TILES = Array.from({ length: 5 }, (_, index) => ({
  src: `https://picsum.photos/seed/axiom-insta-${index + 1}/400/400`,
  alt: `Instagram feed photo ${index + 1}`,
}))

/* Instagram strip recreated from the source's five-tile row: square photos
   with a blue overlay and a centered white icon link on hover, capped by a
   full-width #00A7FF "Visit Our Work" band. */

export function Instagram() {
  return (
    <section aria-label="Instagram" className="bg-white">
      <div className="flex">
        {TILES.map((tile) => (
          <div key={tile.src} className="group relative w-1/5 overflow-hidden">
            <img
              src={tile.src}
              alt={tile.alt}
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a href="#instagram" aria-label={`View ${tile.alt}`} className="text-4xl text-white">
                <InstagramIcon className="h-8 w-8" />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-accent py-10 text-center">
        <a href="#work" className="text-[26px] font-medium text-white">
          Visit Our Work
        </a>
      </div>
    </section>
  )
}
