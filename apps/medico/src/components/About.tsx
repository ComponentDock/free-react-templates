import { Ambulance, Calendar, ShieldCheck } from 'lucide-react'
import {
  aboutBlurb,
  aboutImageAlt,
  aboutImageSeed,
  aboutItems,
  aboutTitle,
  learnMoreLabel,
  type AboutItem,
} from '../data'

const icons: Record<AboutItem['icon'], typeof Ambulance> = {
  ambulance: Ambulance,
  calendar: Calendar,
  shield: ShieldCheck,
}

export function About() {
  return (
    <section id="about" className="relative bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-2">
        <div className="relative">
          <img
            src={`https://picsum.photos/seed/${aboutImageSeed}/570/500`}
            alt={aboutImageAlt}
            loading="lazy"
            className="w-full max-w-[570px] rounded-lg object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-brand-2/15 blur-2xl"
          />
        </div>
        <div>
          <h2 className="font-serif text-4xl font-semibold text-heading sm:text-[42px]">
            {aboutTitle}
          </h2>
          <p className="mt-5 text-[15px] leading-7 text-muted">{aboutBlurb}</p>
          <a
            href="#appointment"
            className="mt-8 inline-flex h-[50px] items-center bg-white px-10 text-sm font-medium text-heading transition-colors hover:bg-gradient-to-r hover:from-brand-2 hover:to-brand hover:text-white"
          >
            {learnMoreLabel}
          </a>
          <div className="mt-10 flex flex-wrap gap-10">
            {aboutItems.map((item) => {
              const Icon = icons[item.icon]
              return (
                <div key={item.title} className="text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-icon-circle text-heading">
                    <Icon aria-hidden="true" className="h-6 w-6" />
                  </span>
                  <h5 className="mt-3 text-lg capitalize text-heading">{item.title}</h5>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
