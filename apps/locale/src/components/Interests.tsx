import { ButtonLink, cn } from '@free-react-templates/ui'
import {
  INTEREST_CTA_LABEL,
  INTERESTS,
  INTERESTS_SUBTITLE,
  INTERESTS_TITLE,
  LISTINGS_ID,
  type Interest,
} from '../lib/site'
import {
  bandClass,
  containerClass,
  sectionSubtitleClass,
  sectionTitleClass,
  veilClass,
} from '../lib/styles'

function InterestCard({ interest }: { interest: Interest }) {
  return (
    <div
      data-testid="interest-card"
      className="group relative h-64 overflow-hidden rounded-[10px]"
    >
      <img
        src={interest.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div aria-hidden="true" className={veilClass} />
      <h3 className="absolute bottom-4 left-4 font-display text-base font-semibold text-white">
        {interest.title}
      </h3>
    </div>
  )
}

/**
 * The mixed interest grid on the pale blue-grey band: two stacked cards, a tall centre card whose
 * description sits over the photo with an "Explore" call to action, and two more stacked cards.
 */
export function Interests() {
  return (
    <section className={bandClass}>
      <div className={containerClass}>
        <div className="text-center">
          <h2 className={sectionTitleClass}>{INTERESTS_TITLE}</h2>
          <p className={sectionSubtitleClass}>{INTERESTS_SUBTITLE}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            {INTERESTS.left.map((interest) => (
              <InterestCard key={interest.image} interest={interest} />
            ))}
          </div>

          <div
            data-testid="interest-feature"
            className="group relative flex h-full items-end overflow-hidden rounded-[10px]"
          >
            <img
              src={INTERESTS.feature.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div aria-hidden="true" className={cn(veilClass, 'bg-[#010a27] opacity-90')} />
            <div className="relative p-6 text-left">
              <h3 className="font-display text-lg font-semibold text-white">
                {INTERESTS.feature.title}
              </h3>
              <p
                data-testid="interest-feature-description"
                className="mt-2 max-w-xs text-sm leading-relaxed text-white/90"
              >
                {INTERESTS.feature.description}
              </p>
              <ButtonLink
                href={`#${LISTINGS_ID}`}
                className="mt-5 h-auto rounded-full px-8 py-3 text-sm"
              >
                {INTEREST_CTA_LABEL}
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {INTERESTS.right.map((interest) => (
              <InterestCard key={interest.image} interest={interest} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
