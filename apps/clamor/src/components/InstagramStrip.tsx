import { instagramSectionLabel, instagramSeeds, instagramTileLabel, instagramTitle } from '../data'

/* Instagram strip (#colorlib-instagram, padding 7em 0) — centered uppercase
   "Instagram" heading + a row of 8 square image tiles (8-across desktop /
   4-across tablet / 2-across mobile, 200px tall). */
export function InstagramStrip() {
  return (
    <section aria-label={instagramSectionLabel} className="bg-page px-4 pb-28 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-serif text-base uppercase tracking-widest text-ink">
          {instagramTitle}
        </h2>
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
          {instagramSeeds.map((seed, index) => (
            <li key={seed}>
              <img
                src={`https://picsum.photos/seed/${seed}/300/200`}
                alt={instagramTileLabel(index)}
                className="h-[200px] w-full object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
