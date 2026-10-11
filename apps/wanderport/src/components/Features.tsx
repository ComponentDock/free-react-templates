import { Gift, Phone, Rocket, Sparkles } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { PILL_BASE, PILL_OUTLINE } from '../lib/buttonStyles'

const FEATURES = [
  {
    Icon: Rocket,
    title: 'Easy Flight Search',
    blurb:
      'Compare every departure we can sell, then hold the one that suits your dates and your budget.',
  },
  {
    Icon: Sparkles,
    title: 'Get Hotel Offers',
    blurb: 'Room rates from boutique hideaways to five-star resorts, negotiated and held for you.',
  },
  {
    Icon: Gift,
    title: 'Holiday Packages',
    blurb: 'Ready-made routes with transfers, guides and the small details already taken care of.',
  },
  {
    Icon: Phone,
    title: 'Dedicated Support',
    blurb: 'A named consultant on call before, during and after every trip we book for you.',
  },
] as const

/* Four icon cards on white with 120px rhythm. The glyph starts grey and takes
   the brand gradient on hover (an SVG gradient stroke — background-clip: text
   cannot paint an icon), matching the reference's gradient-clipped icons. */
export function Features() {
  return (
    <section aria-label="Why book with us" className="section-gap">
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="wanderport-icon-gradient" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#9a52fd" />
            <stop offset="100%" stopColor="#57ffed" />
          </linearGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-[1170px] px-4">
        <ul className="grid gap-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ Icon, title, blurb }) => (
            <li key={title} className="group text-center lg:text-left">
              <Icon
                className="mx-auto h-[35px] w-[35px] text-body transition-colors duration-300 group-hover:[stroke:url(#wanderport-icon-gradient)] lg:mx-0"
                strokeWidth={1.4}
                aria-hidden="true"
              />
              <h4 className="mt-[40px] mb-[20px] text-[18px]">{title}</h4>
              <p className="mb-[35px] leading-[1.7]">{blurb}</p>
              <ButtonLink
                href="#package"
                className={cn(
                  PILL_BASE,
                  PILL_OUTLINE,
                  'justify-center font-semibold hover:no-underline',
                )}
              >
                View Details
              </ButtonLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
