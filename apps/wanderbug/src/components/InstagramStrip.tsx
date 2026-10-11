import { InstagramMark } from './BrandIcons'

const STRIP = [
  'wanderbug-insta-1',
  'wanderbug-insta-2',
  'wanderbug-insta-3',
  'wanderbug-insta-4',
  'wanderbug-insta-5',
  'wanderbug-insta-6',
] as const

/* Full-bleed photo strip: edge-to-edge tiles that wash yellow with a white
   instagram mark on hover or keyboard focus. */
export function InstagramStrip() {
  return (
    <section id="instagram" className="bg-white pb-[100px]">
      <ul className="flex flex-wrap">
        {STRIP.map((seed) => (
          <li key={seed} className="group relative w-1/2 sm:w-1/3 lg:w-1/6">
            <a
              href="#instagram"
              aria-label="Wanderbug on Instagram"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand"
            >
              <img
                src={`https://picsum.photos/seed/${seed}/400/400`}
                alt=""
                loading="lazy"
                className="h-[200px] w-full object-cover lg:h-[260px]"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 overlay-brand"
              >
                <InstagramMark className="h-8 w-8" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
