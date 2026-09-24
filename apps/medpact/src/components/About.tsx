import { Check } from 'lucide-react'
import {
  aboutTitle,
  aboutBlurb,
  aboutImageSeed,
  aboutImageAlt,
  learnMoreLabel,
  aboutItems,
} from '../data'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={`https://picsum.photos/seed/${aboutImageSeed}/500/400`}
            alt={aboutImageAlt}
            loading="lazy"
            className="w-full max-w-[500px] rounded-lg object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl font-bold text-heading sm:text-4xl">{aboutTitle}</h2>
          <p className="mt-4 text-[15px] leading-7 text-muted">{aboutBlurb}</p>
          <ul className="mt-6 space-y-3">
            {aboutItems.map((item) => (
              <li key={item.title} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <Check aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-heading">{item.title}</span>
              </li>
            ))}
          </ul>
          <a
            href="#appointment"
            className="mt-8 inline-flex h-[46px] items-center rounded bg-brand px-8 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            {learnMoreLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
