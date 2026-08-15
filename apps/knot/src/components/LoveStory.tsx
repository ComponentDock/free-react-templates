import { Flower2 } from 'lucide-react'
import { BrandIcon } from './BrandIcon'
import {
  brideCard,
  groomCard,
  loveStoryTitle,
  socialLinks,
  timelineSteps,
  type LoverCard,
} from '../data'

function LoverCard({ card }: { card: LoverCard }) {
  return (
    <div className="text-center">
      <img
        src={card.image}
        alt={card.alt}
        className="mx-auto h-[247px] w-[247px] rounded-full object-cover"
      />
      <span className="mt-8 block text-2xl font-normal text-ink">{card.label}</span>
      <h3 className="mt-2 text-4xl font-normal text-brand">{card.name}</h3>
      <p className="mb-5 mt-8 text-base leading-7">{card.text}</p>
      <ul className="flex items-center justify-center gap-4">
        {socialLinks.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <BrandIcon name={social.icon} className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function LoveStory() {
  return (
    <section id="story-section" className="py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <Flower2 aria-hidden="true" className="mx-auto h-6 w-6 text-brand" />
        <h2 className="mt-5 text-4xl font-normal uppercase text-ink">{loveStoryTitle}</h2>
      </div>
      <div className="mx-auto mt-14 grid max-w-6xl items-start gap-10 px-4 lg:grid-cols-3">
        <LoverCard card={groomCard} />
        <div className="bg-cream p-8 text-center">
          {timelineSteps.map((step) => (
            <div key={step.title} className="py-8">
              <h3 className="text-2xl font-normal text-brand">{step.title}</h3>
              <p className="mt-4 text-base leading-7">{step.text}</p>
            </div>
          ))}
        </div>
        <LoverCard card={brideCard} />
      </div>
    </section>
  )
}
