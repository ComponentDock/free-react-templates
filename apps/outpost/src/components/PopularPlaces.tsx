import { SectionTitle } from './SectionTitle'

const PLACES = [
  {
    seed: 'outpost-place-1',
    eyebrow: 'Proper Guided Tour',
    title: 'Santorini Island Dream Holiday and Fun package',
  },
  {
    seed: 'outpost-place-2',
    eyebrow: 'Proper Guided Tour',
    title: 'Stockholmes Archipelago Sailing Week',
  },
  {
    seed: 'outpost-place-3',
    eyebrow: 'Proper Guided Tour',
    title: 'Lofoten Northern Lights Cabin Retreat',
  },
  {
    seed: 'outpost-place-4',
    eyebrow: 'Proper Guided Tour',
    title: 'Atlas Desert Camp and Night Sky Trail',
  },
] as const

/* Full-bleed destination cards: the caption rests at the bottom edge, the
   photo darkens and the caption lifts on hover. */
export function PopularPlaces() {
  return (
    <section id="places" className="py-[120px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <SectionTitle
          eyebrow="We're Offering these Trip Packages"
          title="Popular Places Around the World"
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PLACES.map((place) => (
            <a
              key={place.seed}
              href="#packages"
              className="group relative block h-[420px] overflow-hidden"
            >
              <img
                src={`https://picsum.photos/seed/${place.seed}/600/840`}
                alt={place.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/40"
              />
              <span className="absolute inset-x-0 bottom-0 px-6 pb-8 text-center transition-all duration-300 group-hover:bottom-[80px]">
                <span className="block text-[12px] font-semibold uppercase tracking-[1px] text-white">
                  {place.eyebrow}
                </span>
                <span className="mt-2 block font-display text-[21px] font-bold text-white">
                  {place.title}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
