import { cn } from '@free-react-templates/ui'
import { facilities, facilitiesSectionLabel, facilitiesTitle, visitCenterLabel } from '../data'
import { GoldButtonLink } from './GoldButton'

/* Facilities — #F7F7F7 section with a 72px "Facilities" title and two
   alternating photo/text blocks (reference: .facilities-section /
   .facilities-img / .facilities-text): photo + heading + copy + a gold
   "Visit Center" link button. */
export function Facilities() {
  return (
    <section aria-label={facilitiesSectionLabel} className="bg-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <h1 className="mb-16 text-center font-serif text-5xl text-heading lg:mb-20 lg:text-[72px] lg:leading-[72px]">
          {facilitiesTitle}
        </h1>

        <div className="space-y-16 lg:space-y-24">
          {facilities.map((facility, index) => (
            <div
              key={`${facility.title}-${index}`}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <img
                src={`https://picsum.photos/seed/${facility.seed}/960/640`}
                alt={facility.title}
                className={cn(
                  'h-64 w-full object-cover sm:h-80 lg:h-[420px]',
                  index % 2 === 1 && 'lg:order-2',
                )}
              />
              <div className={cn('flex justify-center', index % 2 === 1 && 'lg:order-1')}>
                <div className="max-w-xl">
                  <h2 className="mb-4 font-serif text-3xl text-heading lg:text-4xl">
                    {facility.title}
                  </h2>
                  <p className="mb-8 leading-7 text-heading/70">{facility.text}</p>
                  <GoldButtonLink href="#rooms">{visitCenterLabel}</GoldButtonLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
