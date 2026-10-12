import { Check } from 'lucide-react'

interface Band {
  id: string
  heading: string
  body: string
  bullets: string[]
  image: string
  reversed?: boolean
}

const BANDS: Band[] = [
  {
    id: 'about',
    heading: 'Global server location',
    body: 'Your site is served from the region closest to your visitors, so pages start faster and stay responsive wherever they are browsing from.',
    bullets: [
      'WordPress hosting with detailed website analytics',
      'Experts on hand for migrations and tuning',
      'Detailed website analytics included',
    ],
    image: 'https://picsum.photos/seed/ecohive-about-1/560/520',
  },
  {
    id: 'support',
    heading: 'Dedicated support',
    body: 'One team covers setup, migrations and day-to-day questions, so you never have to explain your stack twice.',
    bullets: [
      'Talk to a specialist any day of the week',
      'Migrations, staging sites and tuning handled for you',
    ],
    image: 'https://picsum.photos/seed/ecohive-about-2/560/520',
    reversed: true,
  },
]

/**
 * The two light split content bands. Each pairs an illustration with a heading,
 * paragraph and check list; the second band mirrors the columns so the copy
 * leads and the image follows.
 */
export function AboutBands() {
  return (
    <>
      {BANDS.map((band) => {
        const image = (
          <img
            src={band.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="mx-auto w-full max-w-[420px] rounded-lg"
          />
        )
        const copy = (
          <div>
            <h2 className="font-heading text-3xl font-bold text-ink">{band.heading}</h2>
            <p className="mt-5 text-sm leading-relaxed text-body-light">{band.body}</p>
            <ul className="mt-8 space-y-3">
              {band.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-ink">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent-strong"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
            {band.reversed ? (
              <a
                href="tel:+1555010142"
                className="font-heading mt-6 inline-block text-lg font-semibold text-accent-strong transition-colors hover:text-accent"
              >
                +1 (555) 010-0142
              </a>
            ) : null}
          </div>
        )

        return (
          <section key={band.id} id={band.id} className="bg-surface py-20">
            <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 lg:grid-cols-2">
              {band.reversed ? (
                <>
                  {copy}
                  {image}
                </>
              ) : (
                <>
                  {image}
                  {copy}
                </>
              )}
            </div>
          </section>
        )
      })}
    </>
  )
}
