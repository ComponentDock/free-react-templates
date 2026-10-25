import { cn } from '@free-react-templates/ui'
import { SPECIES, SPECIES_CALLOUT } from '../data'
import { Reveal } from './Reveal'
import { SectionHead } from './SectionHead'

/**
 * Six species cards: four the practice treats, two it says plainly it does not.
 * The referral cards are visually demoted (dashed border, grey ground, a chip) —
 * that contrast is the whole point of the band, so it must not be softened.
 */
export function Species() {
  return (
    <section id="species" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <SectionHead
          align="center"
          eyebrow="Animals we see"
          title="What we treat, and what we do not"
          lede="We are a small animal practice. Being honest about the edges of that is more useful than implying we can see anything."
        />

        <Reveal>
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIES.map((species) => (
              <li
                key={species.name}
                className={cn(
                  'rounded-2xl border p-6',
                  species.referred
                    ? 'border-dashed border-gray-300 bg-gray-50'
                    : 'border-primary-200 bg-white',
                )}
              >
                <div className="flex items-start justify-between gap-3">
                  <span aria-hidden="true" className="text-3xl leading-none">
                    {species.emoji}
                  </span>
                  {species.referred ? (
                    <span className="rounded-full bg-gray-200 px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-gray-600 uppercase">
                      Referred on
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-lg font-bold text-gray-900">{species.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{species.body}</p>
                <p
                  className={cn(
                    'mt-4 border-t pt-3 text-sm',
                    species.referred ? 'border-gray-200' : 'border-primary-100',
                  )}
                >
                  <span className="text-gray-500">Routine care</span>{' '}
                  <span className="ml-2 font-semibold text-primary-700">{species.care}</span>
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-8 rounded-2xl border-l-4 border-accent-400 bg-accent-50 px-5 py-4 text-sm leading-relaxed text-gray-700">
          {SPECIES_CALLOUT}
        </p>
      </div>
    </section>
  )
}
